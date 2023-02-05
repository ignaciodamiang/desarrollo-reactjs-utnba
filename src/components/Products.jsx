import React, { useState, useEffect } from 'react';
import Product from './Product';
import { getAll } from '../services/productsService';

function Products() {
  const [buy, setBuy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAll(search);
        console.log(response?.results);
        setProducts(response?.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [search]);

  const handleBuy = () => {
    setBuy(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (buy) {
    return <div>Thank you for buying. </div>;
  } else {
    return (
      <div className=''>
        <h1>Products</h1>
        <input
          type='text'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {products.map((product) => (
          <Product {...product} comprar={handleBuy} />
        ))}
      </div>
    );
  }
}

export default Products;
