import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import NavUp from './NavUp';
import NavDown from './NavDown';
import NavBar from './NavBar';
import { addToCart } from './redux/actions/cartAction';
import { changeDecreaseQty } from './redux/actions/productAction';

export default function SingleCard() {
  const products = useSelector((state) => state.productsReducers);
  const dispatch = useDispatch()

  const showAlert = (name) =>
    alert(`${name} נוסף להזמנה בהצלחה!`);

  const renderCards = () => {
    const rows = [];
    debugger
    for (let i = 0; i < products.length; i += 4) {
      const row = (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {products.slice(i, i + 4).map((item) => (
            <Card style={{ width: '18rem' }} key={item.id}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>₪ {item.price}</Card.Text>
                <Button onClick={(e) => {
                  e.preventDefault();
                  debugger
                  console.log('this is e')
                  dispatch(changeDecreaseQty(item.id, item.qty - 1));
                  // console.log(.qty - amount, "id" + props.products.id)
                  debugger
                  dispatch(addToCart(item, 1))
                  showAlert(item.name)

                }}
                  variant="primary"
                > הוסף להזמנה < svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg></Button>
              </Card.Body>
            </Card >
          ))
          }
        </div >
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
