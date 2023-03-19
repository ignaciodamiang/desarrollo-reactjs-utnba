import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { Button, Form } from 'react-bootstrap';
import firebase from '../config/firebase';
import { useState } from 'react';
import CustomAlert from '../components/CustomAlert';
import LoadingButton from '../components/LoadingButton';

function Registry() {
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
      if (responseUser.user.uid) {
        const document = await firebase.firestore().collection('usuarios').add({
          nombre: data.nombre,
          apellido: data.apellido,
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
            link: '/ingresar',
          });
          setLoading(false);
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
          register={{ ...register('nombre', { required: true }) }}
        />
        {errors.nombre && (
          <div>
            <span>This field is required</span>
          </div>
        )}

        <Input label='Apellido' register={{ ...register('apellido') }} />

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
