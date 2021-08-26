import React from 'react'
// import CheckoutBACK from './CheckoutBACK.jsx'
// import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

// import { getOrderTest } from './Redux/actions';

function PaymentSuccessTest() {

	// const dispatch = useDispatch();
	let { id } = useParams()

	// useEffect(() => {

	// 	dispatch(getOrderTest())

	// }, [dispatch]) // ?


	// aca se puede hacer un dispatch al back para traer lo datos de la order (el id se pasa por params), y mostrar precio, fecha, etc..
	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center flex">
			<div className="bg-white p-16 rounded-lg shadow-lg relative hover:shadow-2xl transition duration-500 flex flex-col">
				<h1 className="text-2xl text-gray-800 font-semibold mb-3">Tu compra fue exitosa!!</h1>
				<p className="text-text-gray-700 leading-6 tracking-normal">El numero de tu orden es <b>{id}</b></p>
				<p className="text-text-gray-700 leading-6 tracking-normal mb-6">Gracias por confiar en CHANGAS!</p>
				<img
					src="https://media.discordapp.net/attachments/868284643886120985/872487887319474236/1.png?width=797&height=171"
					alt="Logo"
					width="120"
					className="self-end mt-6"
				/>
			</div>
		</div>
	);
}

export default PaymentSuccessTest;