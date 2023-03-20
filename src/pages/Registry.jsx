import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { Form } from 'react-bootstrap';
import firebase from '../config/firebase';
import { useState } from 'react';
import CustomAlert from '../components/CustomAlert';
import LoadingButton from '../components/LoadingButton';
import { sendEmailVerification } from '../services/usuariosServices';

import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Registry() {
  const { handleLogin, login } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const [alert, setAlert] = useState({ variant: '', text: '' });
  const [loading, setLoading] = useState(false);

  if (login) return <Navigate replace to='/' />;

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const responseUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      const user = responseUser.user;

      if (responseUser.user.uid) {
        const document = await firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .set({
            name: data.name,
            lastname: data.lastname,
            userId: responseUser.user.uid,
          });
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
        await sendEmailVerification(user);
      }
    } catch (e) {
      console.log(e);
      setAlert({ variant: 'danger', text: 'Ha ocurrido un error' });
      setLoading(false);
    }
  };

  return (
    <div>
      <Form
        className='justify-content-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Container className='w-75' fluid>
          <h2 className='text-black-50 my-4'>Registry</h2>
          <Row className='justify-content-center'>
            <Col lg='5'>
              <Input
                label='Nombre'
                register={{ ...register('name', { required: true }) }}
              />
            </Col>
          </Row>

          <Row className='justify-content-center'>
            <Col lg='5'>
              <Input label='Apellido' register={{ ...register('lastname') }} />
            </Col>
          </Row>

          <Row className='justify-content-center'>
            <Col lg='5'>
              <Input
                label='Email'
                type='email'
                register={{ ...register('email', { required: true }) }}
              />
            </Col>
          </Row>

          <Row className='justify-content-center'>
            <Col lg='5'>
              <Input
                label='Contraseña'
                type='password'
                register={{
                  ...register('password', { required: true, minLength: 6 }),
                }}
              />
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col lg='5'>
              <LoadingButton type='submit' variant='primary' loading={loading}>
                Registrarse
              </LoadingButton>
            </Col>
          </Row>
        </Container>
      </Form>
      {errors.name && (
        <div className='text-danger'>
          <span>Name field is required</span>
        </div>
      )}
      {errors.email && (
        <div className='text-danger'>
          <span>Email field is required</span>
        </div>
      )}
      {errors.password && (
        <div className='text-danger'>
          {errors.password?.type === 'required' && (
            <span>Password field is required</span>
          )}
          {errors.password?.type === 'minLength' && (
            <span>Password must be at least 6 characters long</span>
          )}
        </div>
      )}
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
