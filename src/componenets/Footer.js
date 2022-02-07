import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
function Footer() {
	return (
		<div className='footer'>
			<p>Designed and Developed by</p>
			<hr />
			<p>
				{' '}
				<FaRegCopyright /> 2022 Aashish Giri
			</p>
		</div>
	);
}

export default Footer;
