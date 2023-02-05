import { useForm } from 'react-hook-form';
import Input from '../components/Input';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Email'
          type='email'
          login={{ ...register('email', { required: true }) }}
        />
        {errors.email && (
          <div>
            <span>This field is required</span>
          </div>
        )}
        <Input
          label='Password'
          type='password'
          login={{
            ...register('password', { required: true, minLength: 6 }),
          }}
        />
        {errors.password && (
          <div>
            {errors.password?.type === 'required' && (
              <span>This field is required</span>
            )}
          </div>
        )}
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
