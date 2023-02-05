import { Link } from 'react-router-dom';
function Product({ id, title, price, domain_id, thumbnail, buy }) {
  return (
    <div className='product'>
      <h2>{title}</h2>
      <img src={thumbnail} alt='' />
      <p>${price}</p>
      <p>{domain_id}</p>
      <button className='button' onClick={buy}>
        Buy
      </button>
      <button className='button'>
        <Link to={`/product/${id}`}>View details</Link>
      </button>
    </div>
  );
}

export default Product;
