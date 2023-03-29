import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from 'assets/img/logo.png';

const Header: FC = () => {
	return (<>
		<Navbar bg="light" variant="light" style={{marginBottom: 30, boxShadow: 'rgba(0,0,0,0.2) 0px 0px 10px 3px'}}>
			<Container>
				<Navbar.Brand href="/"><b><img width='23' height='23' alt='logo' src={logo} /> Example Name</b></Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	</>)
}

export default Header;