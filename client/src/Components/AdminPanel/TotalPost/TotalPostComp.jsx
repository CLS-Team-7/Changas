import React from 'react'
import { Link } from 'react-router-dom'
import ButtonAdmin from '../BottonAdmin/ButtonAdmin'

function TotalPostComp({ post }) {
    return (
        <div>
            <table>
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Nombre del posteo
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Estado
                        </th>

                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Dueño del post
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Activar/Desactivar publicacion
                        </th>


                    </tr>
                </thead>
                {post?.map(e => {
                    return <tr key={e.id} className="">
                        <td className="px-6 py-4 whitespace-nowrap py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 " >
                            <div className="flex items-center">

                                <div className="flex-shrink-0 h-10 w-10">

                                    <img className="h-10 w-10 rounded-full" src={e.image} alt="" />
                                </div>
                                <div className="ml-2 flex items-center">
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                    </th>
                                    <Link to={`/posts/${e.id}`}><div className="text-sm font-medium text-gray-900">{e.title}</div></Link>
                                    {/* <div className="text-sm text-gray-500">{person.email}</div> */}
                                </div>

                            </div>
                        </td>

                        <td className="px-6 py-2 whitespace-nowrap ">

                            {
                                e.isActive
                                    ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-600 text-white">Inactive</span>
                            }

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">

                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.isAdmin ? "Admin" : "Normal"}</td> */}
                        <div className="ml-2 flex items-center">

                            <Link to={`/profile/${e.user?.id}`}><div className="text-sm font-medium text-gray-900">{e.user?.fullName}</div></Link>
                            {/* <div className="text-sm text-gray-500">{person.email}</div> */}
                        </div>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <ButtonAdmin id={e.id} isActive={e.isActive} />
                        </td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default TotalPostComp
