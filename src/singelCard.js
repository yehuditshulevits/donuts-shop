// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import NavUp from './NavUp';
// import NavDown from './NavDown';

// export default function SingleCard() {
//   const products = useSelector((state) => state.productsReducer);

//   const renderCards = products.map(({ id, name, gty, image, description, price }) => (
//     <Card style={{ width: '18rem' }} key={id}>
//       <Card.Img variant="top" src={image} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>{description}</Card.Text>
//         <Card.Text>{price}</Card.Text>
//         <Button variant="primary">הוסף להזמנה</Button>
//       </Card.Body>
//     </Card>
//   ));

//   return (
//     <div>
//       <NavUp></NavUp>
//       {renderCards}
//       <NavDown></NavDown>
//     </div>
//   );
// }
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import NavUp from './NavUp';
import NavDown from './NavDown';
import NavBar from './NavBar';

export default function SingleCard() {
  const products = useSelector((state) => state.productsReducer);

  const renderCards = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 4) {
      const row = (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {products.slice(i, i + 4).map(({ id, name, qty, image, description, price }) => (
            <Card style={{ width: '18rem' }} key={id}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary" >הוסף להזמנה  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg></Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      );
      rows.push(row);
    }
    return rows;
  };

  return (
    <div>
      <NavBar></NavBar>
      <NavUp></NavUp>
      {renderCards()}
      <NavDown></NavDown>
    </div>
  );
}



