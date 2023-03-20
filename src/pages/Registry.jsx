import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { Form } from 'react-bootstrap';
import firebase from '../config/firebase';
import { useState } from 'react';
import CustomAlert from '../components/CustomAlert';
import LoadingButton from '../components/LoadingButton';
import { createUserDocument } from '../services/usuariosServices';
import { useAuthContext } from '../context/AuthContext';

function Registry() {
  const { handleLogin } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const [alert, setAlert] = useState({ variant: '', text: '' });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const responseUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      console.log(
        '🚀 ~ file: Registry.jsx:19 ~ onSubmit ~ responseUser',
        responseUser
      );
      const user = responseUser.user;
      await createUserDocument(user);

      if (responseUser.user.uid) {
        const document = await firebase.firestore().collection('users').add({
          name: data.name,
          lastname: data.lastname,
          userId: responseUser.user.uid,
        });
        console.log(
          '🚀 ~ file: Registry.jsx:30 ~ onSubmit ~ document',
          document
        );
        if (document) {
          setAlert({
            variant: 'success',
            text: 'Gracias por registrarse',
            duration: 3000,
            link: '/login',
          });
          setLoading(false);

          // Call handleLogin with email and password
          handleLogin(data.email, data.password);
        }
      }
    } catch (e) {
      console.log(e);
      setAlert({ variant: 'danger', text: 'Ha ocurrido un error' });
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Nombre'
          register={{ ...register('name', { required: true }) }}
        />
        {errors.name && (
          <div>
            <span>This field is required</span>
          </div>
        )}

        <Input label='Apellido' register={{ ...register('lastname') }} />

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

        <LoadingButton type='submit' variant='primary' loading={loading}>
          Registrarse
        </LoadingButton>
      </Form>
      <CustomAlert
        // variant={alert.variant}
        // text={alert.text}
        // duration={alert.duration}
        // link={alert.link}
        {...alert}
      />
    </div>
  );
}

export default Registry;
