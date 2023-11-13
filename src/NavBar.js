import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { deleteFromCart } from './redux/actions/cartAction';
import { AiOutlineShoppingCart } from "react-icons/ai";
import './NavBar.css';
import React, { useNavigate } from 'react';


function NavBar() {
    const cart = useSelector((state) => state.cartReducers);
    debugger
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/my-component');
    }
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">Donatina</Navbar.Brand>
                        <Navbar.Toggle><Badge bg="secondary">{cart.length}</Badge><AiOutlineShoppingCart /></Navbar.Toggle><Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    עגלת הקניות שלך
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3"></Nav>
                                {cart.length > 0 ?
                                    <>

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
                                        </Table><br /><br />

                                        <br /><br />
                                        <Button variant="outline-info"
                                            onClick={handleClick}
                                        >תשלום</Button>
                                    </>
                                    : <h1 dir='rtl' style={{ color: "gray" }}>עגלת הקניות שלכם ריקה :(</h1>
                                }
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>
                    </Container>
                </Navbar >
            ))
            }
        </>
    );
}

export default NavBar;