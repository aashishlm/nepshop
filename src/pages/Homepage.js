import React, { useEffect, useState } from 'react';
import Layout from '../componenets/Layout';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { fireDB } from '../fireConfig';

import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
const Homepage = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const { cartItems } = useSelector((state) => state.cartReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		getdata();
	}, []);

	async function getdata() {
		setLoading(true);
		try {
			const users = await getDocs(collection(fireDB, 'products'));
			const productsArray = [];
			users.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data());
				const obj = {
					id: doc.id,
					...doc.data(),
				};
				productsArray.push(obj);
				setLoading(false);
			});
			setProducts(productsArray);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}
	// async function addata() {
	// 	try {
	// 		await addDoc(collection(fireDB, 'users'), {
	// 			name: 'giri',
	// 			age: 21,
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
	// function addProductData() {
	// 	products.map(async (product) => {
	// 		try {
	// 			await addDoc(collection(fireDB, 'products'), product);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	});
	// }
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = (product) => {
		dispatch({ type: 'ADD_TO_CART', payload: product });
	};
	return (
		<Layout loading={loading}>
			<div className='container'>
				<div className='row'>
					{products.map((product) => {
						return (
							<div className='col-md-4'>
								<div className='m-2 p-1 product position-relative'>
									<div className='product-content'>
										<p>{product.name}</p>
										<div className='text-center'>
											<img
												src={product.imgUrl}
												alt='Product 1'
												className='product-img'
											/>
										</div>
										<div className='product-actions'>
											<h2>Rs. {product.price}</h2>
											<div className='d-flex'>
												<button
													className='mx-2'
													onClick={() => addToCart(product)}>
													Add to Cart
												</button>
												<button
													onClick={() =>
														navigate(`/productinfo/${product.id}`)
													}>
													View
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Layout>
	);
};

export default Homepage;
