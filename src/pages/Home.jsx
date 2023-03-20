import Products from '../components/Products';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function Home() {
  const { login } = useAuthContext();
  if (!login) return <Navigate replace to='/login' />;

  return (
    <>
      <Products />
    </>
  );
}

export default Home;
