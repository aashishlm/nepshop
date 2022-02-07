import React, { useState, useEffect } from 'react';
import Layout from '../componenets/Layout';
import { getDoc, doc } from 'firebase/firestore';
import { fireDB } from '../fireConfig';
import { useParams } from 'react-router';
const ProductInfo = () => {
	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(false);
	const params = useParams();
	useEffect(() => {
		getdata();
	}, []);
	async function getdata() {
		setLoading(true);
		try {
			const producttemp = await getDoc(
				doc(fireDB, 'products', params.productid)
			);
			setProduct(producttemp.data());
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	return (
		<Layout loading={loading}>
			<div container>
				{product && (
					<div>
						<div className='row justify-content-center'>
							<div className='col-md-8'>
								<p>
									<b>{product.name}</b>{' '}
								</p>
								<img
									src={product.imgUrl}
									className='productinfo-img'
									alt={product.descriptions}
								/>
								<hr />
								<p>At Just Rs. {product.price}</p>
								<p>{product.descriptions}</p>

								<div className=' d-flex justify-content-end my-3'>
									<button>Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default ProductInfo;
