import React from 'react';
import Logo from '../DX_sin_fondo.svg'
import './navBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'

function NavBar(){
     return(
         <header>
             
            <Navbar className= "contenedorNavBar">
                <Container className="Container"> 
                    <div className='inicio'>
                        <img src={Logo} alt="logo" className="logo"/>
                        <Navbar.Brand href="/">Inicio</Navbar.Brand>
                    </div>
                    <Nav className="me-auto">
                        <LinkContainer to='/users'><Nav.Link >Usuarios</Nav.Link></LinkContainer>
                        <LinkContainer to='/product'><Nav.Link >Productos</Nav.Link></LinkContainer>
                        <Nav.Link href="#">Ventas</Nav.Link>
                    </Nav>
                </Container> 
            </Navbar>
            
         </header>
     );
 }

export default NavBar
