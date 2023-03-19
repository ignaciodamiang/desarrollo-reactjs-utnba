import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import { useAuthContext } from '../context/AuthContext';

const styles = {
  card: {
    marginBottom: '10px',
  },
  buttons: {
    marginRight: '10px',
  },
};

function Product({ id, title, price, domain_id, thumbnail, comprar }) {
  const { login } = useAuthContext();
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card style={styles.card}>
        <Card.Img variant='top' src={thumbnail} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{domain_id}</Card.Text>

          <Button
            variant='primary'
            as={Link}
            to={`/Product/${id}`}
            style={styles.buttons}
          >
            Ver Detalle
          </Button>
          {login && (
            <Button
              variant='primary'
              as={Link}
              to={`/Product/editar/${id}`}
              style={styles.buttons}
            >
              Editar
            </Button>
          )}

          <Button variant='primary' onClick={comprar} style={styles.buttons}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
