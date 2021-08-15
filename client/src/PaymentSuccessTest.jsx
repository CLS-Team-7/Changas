import { useEffect } from 'react'
// import CheckoutBACK from './CheckoutBACK.jsx'
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { getOrderTest } from './Redux/actions';

function PaymentSuccessTest() {

	const dispatch = useDispatch();
	let { id } = useParams()
	console.log(id)
	useEffect(() => {

		dispatch(getOrderTest())

	}, [dispatch]) // ?



	return (
		<div className="App">
			Estas en el PaymentSuccesComponent TEST
		</div>
	);
}

export default PaymentSuccessTest;