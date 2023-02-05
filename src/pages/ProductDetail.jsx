import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById, getDescription } from '../services/productsService';
import { Link } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProducto] = useState({});
  const [description, setDescription] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        const responseProduct = await getById(productId);
        setProducto(responseProduct);
        const responseDescription = await getDescription(productId);
        setDescription(responseDescription);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [productId]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{description.plain_text}</p>
      <p>$ {product.price}</p>
      <p>{product.warranty}</p>
      <button className='button'>
        <Link to={`/`}>Volver</Link>
      </button>
    </div>
  );
}

export default ProductDetail;
