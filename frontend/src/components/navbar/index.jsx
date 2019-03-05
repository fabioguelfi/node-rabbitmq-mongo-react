import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = ({ routes }) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to='/'>
            <Navbar.Brand>Login with Rabbitmq</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                { routes.map(route => (<Link key={route.label} to={route.path}>{route.label}</Link>)) }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavbarComponent