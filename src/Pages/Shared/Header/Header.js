import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {
    const [user] =useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () =>{
        signOut(auth)
    }

    
    return (
        <>
           <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
            <Container>
                
            <Navbar.Brand as={Link} to="/" className='d-flex align-items-center'>
                <img src={logo} alt="logo" style={{width:'50px'}} />
                <span className='ms-2'>Electronics Inventory</span>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                </Nav>
                <Nav>
                {
                    user?
                    <>
                    <Nav.Link as={Link} to="/manageitem">Manage Items</Nav.Link>
                    <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
                    <Nav.Link as={Link} to="/myitem">My Items</Nav.Link>
                    <button onClick={handleSignOut} className="btn btn-link text-white text-decoration-none">Logout</button>
                    </>
                    :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                }              
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;