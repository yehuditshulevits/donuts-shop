import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from './redux/actions/cartAction';
import NavBar from "./NavBar";
import NavDown from "./NavDown";
import { useNavigate } from 'react-router-dom';

export default function PayPal() {
    const cart = useSelector((state) => state.cartReducers);
    const dispatch = useDispatch()
    const navigate = useNavigate();


    return (
        <div>
            <center>
                <NavBar></NavBar>
                <Table striped bordered hover style={{ width: '50%', marginRight: '25%', marginLeft: '25%' }}>
                    <tr>
                        <th></th>
                        <th style={{ textAlign: "center" }}>מחיר</th>
                        <th style={{ textAlign: "center" }}>כמות</th>
                        <th style={{ textAlign: "center" }}>תמונה</th>
                        <th style={{ textAlign: "center" }}>שם המוצר</th>
                    </tr>
                    {cart.map((item) => (
                        console.log(item.price),
                        console.log(item.qty),
                        <>
                            <tr>
                                <td style={{ textAlign: "center" }}><Button style={{
                                    backgroundColor: "#99ddff", color: "black", borderColor: "white"
                                }} onClick={(e) => {
                                    debugger
                                    e.preventDefault();
                                    dispatch(deleteFromCart(item))
                                    console.log(cart)
                                }}
                                > X </Button></td>

                                <td style={{ textAlign: "center" }}> ₪ {item.price}</td>
                                <td style={{ textAlign: "center" }}>
                                    {item.qty}
                                </td>
                                {/* console.log("img:" item.img) */}
                                <td style={{ textAlign: "center" }}><img src={item.image} style={{ width: 100, height: 75 }} /></td>
                                <td style={{ textAlign: "center" }}>{item.name}</td>
                            </tr >

                        </>
                    ))}
                </Table>
                <br></br>
                <Button variant="outline-info" style={{ display: "flex" }}
                    onClick={() => navigate('/')}
                >חזרה לקניה</Button>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>



                <PayPalScriptProvider options={{ "client-id": "test" }}>
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: "10.99",
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={async (data, actions) => {
                            const details = await actions.order.capture();
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        }}
                    />
                </PayPalScriptProvider>
                <NavDown></NavDown>
            </center>
        </div>
    )
}