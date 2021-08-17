import { useEffect, useState } from 'react'
import CheckoutBACK from './CheckoutBACK.jsx'
import axios from 'axios';
import { useParams } from "react-router-dom";

function CheckoutTestBACK() {
	const { id } = useParams();
	const [datos, setDatos] = useState("")
	const [order, setOrder] = useState("");

	useEffect(() => {
		// creo que todo esto se puede simplificar en un unico axios.get, pero queda para despues de la demo
		axios
			.get(`/testcheckoutback/${id}`)
			.then((data) => {
				setDatos(data.data)
				console.info('Contenido de data:', data)

				axios
					.get(`/order/${data.data.id_db}`) // ver si lo toma aca o es null
					.then(data => {
						console.log(data.data)
						setOrder(data.data)
						console.info('La order seteada en el state es: ', order)
					})
					.catch(err => console.error(err));
			})
			.catch(err => console.error(err))

	}, []) // si pongo la dependencia, entra en loop


	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			{!datos
                ? <h1 className="text-2xl text-gray-800 font-semibold mb-3">Aguarde un momento....</h1>
                : <CheckoutBACK productos={order} data={datos} />
            }
		</div>
	);
}

export default CheckoutTestBACK;