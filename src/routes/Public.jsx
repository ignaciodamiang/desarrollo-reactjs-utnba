import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Container from 'react-bootstrap/Container';
import ProductosAlta from '../pages/ProductosAlta';
import ProductosModificar from '../pages/ProductosModificar';
import AuthProvider from '../context/AuthContext';
import Registry from '../pages/Registry';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import TopNavBar from '../components/TopNavBar';

function Public() {
  return (
    <>
      <AuthProvider>
        <TopNavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registry' element={<Registry />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:productId' element={<ProductDetail />} />
            <Route path='/product/alta' element={<ProductosAlta />} />
            <Route
              path='/product/editar/:productoId'
              element={<ProductosModificar />}
            />
          </Routes>
        </Container>
      </AuthProvider>
    </>
  );
}

export default Public;
