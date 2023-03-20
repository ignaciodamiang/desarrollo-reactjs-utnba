import React from 'react';
//import Button from 'react-bootstrap/Button'
import { Button, Spinner } from 'react-bootstrap';

function LoadingButton({
  variant = 'primary',
  type = 'submit',
  loading,
  children,
}) {
  return (
    /* */
    <Button
      className='w-100 mb-2'
      type={type}
      variant={variant}
      disabled={loading}
    >
      {loading && <Spinner animation='border' size='sm' />}
      {children}
    </Button>
  );
}
export default LoadingButton;
