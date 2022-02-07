import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Loader from '../componenets/Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Registerpage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfirmPassword] = useState('');
	const [number, setNumber] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const auth = getAuth();
	const register = async () => {
		if (email && password && confirmpassword) {
			if (password === confirmpassword) {
				try {
					setLoading(true);
					const result = await createUserWithEmailAndPassword(
						auth,
						email,
						password
					);
					console.log(result);
					setLoading(false);
					toast.success('Registration Successfull');
					setTimeout(() => {
						navigate('/login');
					});
				} catch (error) {
					console.log(error);
					toast.error('Registration failed');
					setLoading(false);
				}
			} else {
				toast.error('Password and confirm password didnot match');
			}
		} else {
			toast.error('Enter all details');
		}
	};
	return (
		<div className='register-parent'>
			{loading && <Loader />}
			<div className='register-top'></div>
			<div className='row justify-content-center'>
				<div className='col-md-5'>
					<lottie-player
						src='https://assets9.lottiefiles.com/packages/lf20_IcvJ1B.json'
						background='transparent'
						speed='1'
						autoplay></lottie-player>
				</div>
				<div className='col-md-4 z1'>
					<div className='register-form'>
						<h2>Register to NEPSHOP </h2>
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
							type='text'
							className='form-control'
							placeholder='mobile number'
							value={number}
							onChange={(e) => {
								setNumber(e.target.value);
							}}></input>
						<input
							type='password'
							className='form-control'
							placeholder='password'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}></input>
						<input
							type='password'
							className='form-control'
							placeholder='confirm password'
							value={confirmpassword}
							onChange={(e) => {
								setConfirmPassword(e.target.value);
							}}></input>

						<button className='btn-reg' onClick={register}>
							Register
						</button>
						<Link to='/login'>Click Here to LOGIN</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registerpage;
