import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img4 from './images/4.png';


export default function singelCard(product) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Button variant="primary">הוסף להזמנה</Button>
      </Card.Body>
    </Card>
  );
}

