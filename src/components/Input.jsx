import { Form } from 'react-bootstrap';
import '../assets/Input.css';

function Input({ label, type = 'text', name, placeholder = '', register }) {
  return (
    <Form.Group className='mb-3 input' controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className='input-box'
        type={type}
        name={name}
        placeholder={placeholder}
        {...register}
      />
    </Form.Group>
  );
}

export default Input;
