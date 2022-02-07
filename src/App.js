import React from 'react';
import Cartpage from './pages/Cartpage';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import ProductInfo from './pages/ProductInfo';
import Registerpage from './pages/Registerpage';
import { Route, Navigate, BrowserRouter, Routes } from 'react-router-dom';
import './stylesheet/layout.css';
import './stylesheet/products.css';
import './stylesheet/auth.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<div>
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						exact
						element={
							<ProtectedRoutes>
								<Homepage />
							</ProtectedRoutes>
						}
					/>

					<Route
						path='/productinfo/:productid'
						exact
						element={
							<ProtectedRoutes>
								<ProductInfo />
							</ProtectedRoutes>
						}
					/>
					<Route
						path='/cart'
						exact
						element={
							<ProtectedRoutes>
								<Cartpage />
							</ProtectedRoutes>
						}
					/>
					<Route path='/login' exact element={<Loginpage />} />
					<Route path='/register' exact element={<Registerpage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
export const ProtectedRoutes = ({ children }) => {
	if (localStorage.getItem('currentUser')) {
		return children;
	} else {
		return <Navigate to='/login' />;
	}
};
