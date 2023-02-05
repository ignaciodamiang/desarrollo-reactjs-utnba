import { useForm } from 'react-hook-form';
import Input from '../components/Input';

function Registry() {
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
          label='Name'
          register={{ ...register('name', { required: true }) }}
        />
        {errors.name && (
          <div>
            <span>This field is required</span>
          </div>
        )}

        <Input label='Last Name' register={{ ...register('lastName') }} />

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
          label='Password'
          type='password'
          register={{
            ...register('password', { required: true, minLength: 6 }),
          }}
        />
        {errors.password && (
          <div>
            {errors.password?.type === 'required' && (
              <span>This field is required</span>
            )}
            {errors.password?.type === 'minLength' && (
              <span>At least it has to have 6 characters</span>
            )}
          </div>
        )}
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Registry;
