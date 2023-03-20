import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { Button, Form } from 'react-bootstrap';
import firebase from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { getByUserId } from '../services/usuariosServices';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const { handleLogin } = useAuthContext();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const responseUser = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      if (responseUser.user.uid) {
        const user = await getByUserId(responseUser.user.uid);
        handleLogin(user.docs[0].data());

        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Email'
          type='email'
          register={{ ...register('email', { required: true }) }}
        />
        {errors.email && (
          <div>
            <span>This field is required</span>
          </div>
        )}
        <Input
          label='Contraseña'
          type='password'
          register={{
            ...register('password', { required: true, minLength: 1 }),
          }}
        />
        {errors.password && (
          <div>
            {errors.password?.type === 'required' && (
              <span>This field is required</span>
            )}
            {errors.password?.type === 'minLength' && (
              <span>Debe completar al menos 6 caracteres</span>
            )}
          </div>
        )}
        <Button type='submit' variant='primary'>
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
