import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Container from 'react-bootstrap/Container';
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
            <Route path='/login' element={<Login />} />
            <Route path='/registry' element={<Registry />} />
            <Route path='/' element={<Home />} />
            <Route path='/product/:productId' element={<ProductDetail />} />
          </Routes>
        </Container>
      </AuthProvider>
    </>
  );
}

export default Public;
