import React from 'react'
import { Link } from 'react-router-dom'
import ButtonAdmin from '../../AdminPanel/BottonAdmin/ButtonAdmin'
import ModalPricing from '../../Checkout/ModalPricing/ModalPricing'

function UserpostsComp({ Users }) {

    return (
        <table>
            <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Opciones
                    </th>
                    <th
                        scope="col"
                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Nombre
                    </th>
                    <th
                        scope="col"
                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Tipo de posteo
                    </th>
                    <th
                        scope="col"
                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Estado
                    </th>
                    {/*                     <th
                        scope="col"
                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Categoria/Especialidad
                    </th> */}
                    <th
                        scope="col"
                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Tipo de publicacion
                    </th>
                    <th
                        scope="col"
                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Premium
                    </th>
                </tr>
            </thead>
            {Users?.map(person => {
                return <tr key={person.id} className="">
                    <th
                        scope="col"
                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        <ButtonAdmin id={person.id} isActive={person.isActive} />
                    </th>
                    <td className="break-words max-w-xs px-6 py-8 py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 " >
                        <div className="flex items-center">
                            <div className="text-center align-middle">
                                <th
                                    scope="col"
                                    className="text-center text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <Link to={`/posts/${person.id}`}><p className="text-center break-words max-w-xstext-sm font-medium text-gray-900">{person.title}</p></Link>
                                </th>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.typePost}</div>
                        {/* <div className="text-sm text-gray-500">{person.phoneNumber}</div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">

                        {
                            person.isActive

                                ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Activo</span>
                                : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white"> Desactivado</span>
                        }

                    </td>
                    {/*                     <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.category?.title}</div>
                        <div className="text-sm text-gray-500">{person.specialty?.title}</div>
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.isPremium ? "Premium" : "Normal"}</td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <span className="text-indigo-600 hover:text-indigo-900">
                            Edit
                        </span>
                    </td> */}
                    {
                        person.isPremium ?
                            <span>Si</span> :
                            <ModalPricing
                                USERID={person?.user.id}
                                POSTID={person.id} />
                    }

                </tr>
            })}
        </table>
    )

}

export default UserpostsComp

