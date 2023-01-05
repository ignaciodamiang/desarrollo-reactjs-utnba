// Contact form for Nombre, Apellido, Email, Telefono, Password, Confirmar password

export function ContactForm() {
  return (
    <form className='contact-form' action=''>
      <label>Nombre: </label>
      <input type='text' name='name' />
      <label>Apellido: </label>
      <input type='text' name='lastname' />
      <label>Email: </label>
      <input type='email' name='email' />
      <label>Telefono: </label>
      <input type='tel' name='phone' />
      <label>Password: </label>
      <input type='password' name='password' />
      <label>Confirmar password: </label>
      <input type='password' name='confirm-password' />
      <button type='submit'>Enviar</button>
    </form>
  );
}
