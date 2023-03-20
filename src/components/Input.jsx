function Input({ label, type = 'text', name, placeholder = '', register }) {
  return (
    <div className='mb-3'>
      <label className='form-label'>{label}</label>
      <input
        // size sm
        className='input-box form-control'
        type={type}
        name={name}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
}

export default Input;
