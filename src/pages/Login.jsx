import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { Button, Form } from 'react-bootstrap';
import firebase from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const { handleLogin, login } = useAuthContext();

  const navigate = useNavigate();

  if (login) return <Navigate replace to='/' />;
  const onSubmit = async (data) => {
    try {
      const responseUser = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      if (responseUser.user.uid) {
        handleLogin(data.email, data.password);
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form
        className='justify-content-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Container className='w-75' fluid>
          <h2 className='text-black-50 my-4'>Login</h2>
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
              <Button className='w-100 mb-2' type='submit' variant='primary'>
                Ingresar
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
      {errors.email && (
        <div className='text-danger' v>
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
    </div>
  );
}

export default Login;
