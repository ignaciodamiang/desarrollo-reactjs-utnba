function Input({ label, type = 'text', name, placeholder = '', register }) {
  return (
    <div>
      <label>{label}</label>
      <input
        className='input-box'
        type={type}
        name={name}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
}

export default Input;
