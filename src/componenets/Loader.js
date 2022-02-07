import React from 'react';

const Loader = () => {
	return (
		<div className='d-flex justify-content-center loader'>
			<div className='spinner-border text-primary' role='status'></div>
			<div className='spinner-border text-secondary' role='status'></div>
			<div className='spinner-border text-success' role='status'></div>
		</div>
	);
};

export default Loader;
