import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Loader from '../componenets/Loader';
import { toast } from 'react-toastify';

const Loginpage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const auth = getAuth();
	const login = async () => {
		try {
			setLoading(true);
			const result = await signInWithEmailAndPassword(auth, email, password);
			localStorage.setItem('currentUser', JSON.stringify(result));
			setLoading(false);
			toast.success('Login Successfull');
			window.location.href = '/';
		} catch (error) {
			console.log(error);
			toast.error('Login failed recheck your password and email');
			setLoading(false);
		}
	};
	return (
		<div className='login-parent'>
			{loading && <Loader />}
			<div className='login-bottom'></div>
			<div className='row justify-content-center'>
				<div className='col-md-4 z1'>
					<div className='login-form'>
						<h2>LOGIN to NEPSHOP</h2>
						<hr />
						<input
							type='email'
							className='form-control'
							placeholder='email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}></input>

						<input
							type='password'
							className='form-control'
							placeholder='password'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}></input>

						<button className='btn-reg' onClick={login}>
							LOGIN
						</button>
						<hr />
						<Link to='/register'>Click Here to Register</Link>
					</div>
				</div>
				<div className='col-md-5'>
					<lottie-player
						src='https://assets9.lottiefiles.com/packages/lf20_h7ofe9pc.json'
						background='transparent'
						speed='1'
						autoplay></lottie-player>
				</div>
			</div>
		</div>
	);
};

export default Loginpage;
