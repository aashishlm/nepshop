import React, { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../componenets/Layout';

import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

const Cartpage = () => {
	const { cartItems } = useSelector((state) => state.cartReducer);
	const [totalAmount, setTotalAmount] = useState();
	const dispatch = useDispatch();
	useEffect(() => {
		let temp = 0;
		cartItems.forEach((cartItem) => {
			temp = temp + cartItem.price;
		});
		setTotalAmount(temp);
	}, [cartItems]);
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);
	const deleteFromCart = (product) => {
		dispatch({ type: 'DELETE_FROM_CART', payload: product });
	};
	return (
		<Layout>
			<table className='table mt-3'>
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{cartItems.map((item) => {
						return (
							<tr>
								<td>
									<img src={item.imgUrl} height='60' width='60' />
								</td>
								<td>{item.name}</td>
								<td>{item.price}</td>
								<td>
									<AiFillDelete onClick={() => deleteFromCart(item)} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className='d-flex justify-content-end'>
				<h1 className='total-amount'>Total Ammount = Rs. {totalAmount}</h1>
			</div>
			<div className='d-flex justify-content-end mt-30'>
				<button>PLACE ORDER</button>
			</div>
		</Layout>
	);
};

export default Cartpage;
