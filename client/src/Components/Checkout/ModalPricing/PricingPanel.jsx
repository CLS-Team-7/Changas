import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { CheckoutPost } from '../../../Redux/actions'
import { useHistory } from "react-router-dom"

function PricingPanel({ USERID, POSTID }) {
    const { push } = useHistory()
    const dispatch = useDispatch()
    const orderInfo = useSelector(state => state.orderInfo)


    const orderClick = async (title, price) => {
        await dispatch(CheckoutPost({
            user_id: USERID,
            post_id: POSTID,
            title: title,
            price: price
        }))

    }
    if (orderInfo?.id !== undefined) {
        push(`/testcheckout/${orderInfo?.id}`)
    }

    return (
        <div class=" bg-gray-100 ">
            <div class="w-full mx-auto bg-white  text-gray-600 mb-10">
                <div class="text-center max-w-xl mx-auto">
                    <h3 class="text-xl md:text-5xl font-bold mb-5">¡Promocioná tus publicaciones!</h3>
                    <h3 class="text-xl font-medium mb-10">Elegí un plan para tener más visibilidad en tu publicación</h3>
                </div>
                <div class="max-w-4xl mx-auto md:flex">
                    <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                        <div class="w-full flex-grow">
                            <h2 class="text-center font-bold uppercase mb-4">SEMANAL</h2>
                            <h3 class="text-center font-bold text-4xl mb-5">$250</h3>

                        </div>
                        <div class="w-full">
                            <button class="font-bold bg-gray-600 hover:bg-blue-700 text-white rounded-md px-10 py-2 transition-colors w-full" onClick={() => orderClick("Semanal", 250)}>Elegir</button>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
                        <div class="w-full flex-grow">
                            <h2 class="text-center font-bold uppercase mb-4">MENSUAL</h2>
                            <h3 class="text-center font-bold text-4xl md:text-5xl mb-5">$1000</h3>

                        </div>
                        <div class="w-full">
                            <button class="font-bold bg-gray-600 hover:bg-green-700 text-white rounded-md px-10 py-2 transition-colors w-full" onClick={() => orderClick("Mensual", 1000)}>Elegir</button>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                        <div class="w-full flex-grow">
                            <h2 class="text-center font-bold uppercase mb-4">QUINCENAL</h2>
                            <h3 class="text-center font-bold text-4xl mb-5">$500</h3>
                        </div>
                        <div class="w-full">
                            <button class="font-bold bg-gray-600 hover:bg-blue-700 text-white rounded-md px-10 py-2 transition-colors w-full" onClick={() => orderClick("Quincenal", 500)}>Elegir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPanel
