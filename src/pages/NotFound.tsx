import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Header from '../components/Header';

const NotFound: FC = () => {
	return (<>
		<Header />
		<Container>
			<div className='w-100 text-center d-flex justify-content-center align-items-center' style={{minHeight: '90vh'}}>
				<h2>404 | <i>Not found</i></h2>
			</div>
		</Container>
	</>)
}

export default NotFound;