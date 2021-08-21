/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import PricingPanel from './PricingPanel';

export default function ModalPricing({ USERID, POSTID }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded  "
                type="button"
                onClick={() => setShowModal(true)}
            >
                Promocionar
            </button>
            {showModal ? (
                <>
                    <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between pt-5 pl-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">

                                    <button
                                        onClick={() => setShowModal(false)}
                                        type="button"
                                        className="bg-white rounded-md p-2 mr-5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">Close menu</span>

                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <PricingPanel
                                    USERID={USERID}
                                    POSTID={POSTID} />

                                {/*footer*/}
                                <div className="flex items-center justify-end   rounded-b">
                                    <button
                                        className="mb-5 mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >

                                        <button className="flex items-center ml-auto font-bold text-white bg-indigo-500 border-0 py-3 px-12 focus:outline-none hover:bg-red-600 rounded" onClick={() => setShowModal(false)}>
                                            Cerrar
                                        </button>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}