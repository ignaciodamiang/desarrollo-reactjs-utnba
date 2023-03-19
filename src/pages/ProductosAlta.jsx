import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { Button, Form } from 'react-bootstrap';
import firebase from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { create } from '../services/productsService';

function ProductosAlta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const document = await create(data);
      if (document) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Nombre'
          register={{ ...register('title', { required: true }) }}
        />
        {errors.nombre && (
          <div>
            <span>This field is required</span>
          </div>
        )}

        <Input label='Precio' register={{ ...register('price') }} />
        <Input label='Descripción' register={{ ...register('description') }} />
        <Input label='Imagen' register={{ ...register('thumbnail') }} />

        <Button type='submit' variant='primary'>
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default ProductosAlta;
