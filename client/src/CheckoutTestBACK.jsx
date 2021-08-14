import { useEffect, useState } from 'react'
import CheckoutBACK from './CheckoutBACK.jsx'
import axios from 'axios'

function CheckoutTestBACK() {
	const [datos, setDatos] = useState("")
	const [order, setOrder] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3001/order')
			.then(o => {
				setOrder([...order, o])
				console.log(`La order seteada en el state es: ${[order]}`)
			})
			.catch(err => console.error(err));

		axios
			.get("http://localhost:3001/testcheckout")
			.then((data) => {
				setDatos(data.data)
				console.info('Contenido de data:', data)
			})
			.catch(err => console.error(err))

	}, [order]) // ?



	return (
		<div className="App">
			{!datos && !order
				? <p>Aguarde un momento....</p>
				: <CheckoutBACK productos={order} data={datos} />
			}
		</div>
	);
}

export default CheckoutTestBACK;