import React, { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Header from '../components/Header';

import styles from '../css/Home.module.css';


const Home: FC = () => {
	const navigate = useNavigate();

	return (<>
		<Header />
		<Container id={styles.main}>
			<center><h2>Hi!</h2></center>
		</Container>
	</>)
}

export default Home;