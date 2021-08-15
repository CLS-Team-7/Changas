import { useEffect, useState } from 'react'
import CheckoutBACK from './CheckoutBACK.jsx'
import axios from 'axios'

function CheckoutTestBACK() {
	const [datos, setDatos] = useState("")
	const [order, setOrder] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:3001/testcheckoutback")
			.then((data) => {
				setDatos(data.data)
				console.info('Contenido de data:', data)

				axios
					.get(`http://localhost:3001/order/${data.data.id_db}`) // ver si lo toma aca o es null
					.then(data => {
						console.log(data.data)
						setOrder(data.data)
						console.info('La order seteada en el state es: ', order)
					})
					.catch(err => console.error(err));
			})
			.catch(err => console.error(err))

	}, []) // ?


	return (
		<div className="App">
			{!datos
				? <p>Aguarde un momento....</p>
				: <CheckoutBACK productos={order} data={datos} />
			}
		</div>
	);
}

export default CheckoutTestBACK;