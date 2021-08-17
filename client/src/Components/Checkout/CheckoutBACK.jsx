import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearCheckoutPost } from '../../Redux/actions';


export default function ComprarBack({ productos, data }) {
	const dispatch = useDispatch()
	const { push } = useHistory()
	useEffect(() => {
		const script = document.createElement('script'); //Crea un elemento html script

		const attr_data_preference = document.createAttribute('data-preference-id') //Crea un nodo atribute
		attr_data_preference.value = data.id  //Le asigna como valor el id que devuelve MP

		//Agrega atributos al elemento script
		script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
		script.setAttributeNode(attr_data_preference)

		//Agrega el script como nodo hijo del elemento form
		document.getElementById('form1').appendChild(script)
		/* return () => {
			//Elimina el script como nodo hijo del elemento form
			document.getElementById('form1').removeChild(script);
		} */
	}, [data])
	useEffect(() => {
		dispatch(clearCheckoutPost())
	}, [dispatch])
	return (

		<div className="min-h-screen bg-gray-100 flex items-center justify-center">

			<div className="bg-white p-8 rounded-lg shadow-lg relative hover:shadow-2xl transition duration-500">
				<form id='form1' className={"container mx-auto px-20"}>
					<h1 className="text-2xl text-gray-800 font-semibold mb-3">Tu orden</h1>

					<div className="flex justify-start flex-col pb-10">
						<p className="text-gray-600 leading-6 tracking-normal">	Tipo de promoción: <b>{productos?.title}</b></p>
						<p className="text-gray-600 leading-6 tracking-normal">	Precio: $ <b>{productos?.price}</b></p>
					</div>
					<button className="py-1.5 px-2 mt-8 bg-red-700 mx-6 text-white rounded-sm shadow-xl" onClick={() => push("/home")}>Cancelar</button>
				</form>
			</div>

		</div>
	)
}