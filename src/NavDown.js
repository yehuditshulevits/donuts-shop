import Nav from 'react-bootstrap/Nav';
import { BsFillCaretUpFill } from "react-icons/bs";

export default function NavDown() {
    return (

        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home"><BsFillCaretUpFill></BsFillCaretUpFill></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    רחוב דיסקין 17, ירושלים
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                    טלפון:
                    02-6235947
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
