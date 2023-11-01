import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import NavUp from './NavUp';


export default function SingleCard() {
  const products = useSelector((state) => state.productsReducer);

  const renderCards = products.map(({ id, name, gty, image, description, price }) => (
    <Card style={{ width: '18rem' }} key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">הוסף להזמנה</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div>
      <NavUp></NavUp>
      {renderCards}
    </div>
  );
}


