import React, { useEffect } from 'react'
// import CheckoutBACK from './CheckoutBACK.jsx'
// import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

// import { getOrderTest } from './Redux/actions';

function PaymentSuccessTest() {

	// const dispatch = useDispatch();
	let { id } = useParams()
	// console.log(id)
	// useEffect(() => {

	// 	dispatch(getOrderTest())

	// }, [dispatch]) // ?


	// aca se puede hacer un dispatch al back para traer lo datos de la order (el id se pasa por params), y mostrar precio, fecha, etc..
	return (
		<div className="App">
			<p>Tu compra fue exitosa!!</p>
			<p>El numero de tu orden es {id}. Podras consultar todas tus ordenes en tu panel de usuario!</p>
			<p>Gracias por confiar en CHANGAS!</p>
		</div>
	);
}

export default PaymentSuccessTest;