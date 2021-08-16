import React from 'react'
import { Link } from 'react-router-dom'

function UserpostsComp({ Users }) {


    return (
        <table>
            <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Nombre
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Tipo de posteo
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Estado
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Categoria/Especialidad
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Preguntas
                    </th>
                </tr>
            </thead>
            {Users?.map(person => {
                return <tr key={person.id} className="">
                    <td className="px-6 py-4 whitespace-nowrap py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 " >
                        <div className="flex items-center">
                            <div className="ml-4">
                                <th
                                    scope="col"
                                    className=" text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <Link to={`/posts/${person.id}`}><div className="text-sm font-medium text-gray-900">{person.title}</div></Link>
                                </th>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.typePost}</div>
                        {/* <div className="text-sm text-gray-500">{person.phoneNumber}</div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {
                                person.isActive ? "Active" : "disabled"
                            }
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.category?.title}</div>
                        <div className="text-sm text-gray-500">{person.specialty?.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.questions?.length}</td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <span className="text-indigo-600 hover:text-indigo-900">
                            Edit
                        </span>
                    </td> */}
                </tr>
            })}
        </table>
    )

}

export default UserpostsComp
