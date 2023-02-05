import { Routes, Route } from 'react-router-dom';

import Registry from '../pages/Registry';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import TopNavBar from '../components/TopNavBar';

function Public() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registry' element={<Registry />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default Public;
