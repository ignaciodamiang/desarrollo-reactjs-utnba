import { useEffect, useState } from 'react';
import { getAll } from '../../services/productsService';

export const useFetchProducts = () => {
  const [loading, setLoading] = useState(true);
  const [Products, setProducts] = useState([]);
  const [buscar, setBuscar] = useState('ipod');

  //componentDidMount
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAll(buscar);

        console.log(response);
        setProducts(response.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [buscar]);

  return {
    Products,
    loading,
    buscar,
    setBuscar,
  };
};
