import React from 'react'
import { Link } from 'react-router-dom'

function AdminPanelComp({ Users }) {
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
                        Direccion
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
                        Posts
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            {Users.map(person => {
                return <tr key={person.id} className="">
                    <td className="px-6 py-4 whitespace-nowrap py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 " >
                        <div className="flex items-center">

                            <div className="flex-shrink-0 h-10 w-10">

                                <img className="h-10 w-10 rounded-full" src={person.picture} alt="" />
                            </div>
                            <div className="ml-4">
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                </th>
                                <Link to={`/profile/${person.id}`}><div className="text-sm font-medium text-gray-900">{`${person.given_name} ${person.family_name}`}</div></Link>
                                <div className="text-sm text-gray-500">{person.email}</div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.address}</div>
                        <div className="text-sm text-gray-500">{person.phoneNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        
                            {
                                person.isActive 
                                ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-600 text-white">Inactive</span>
                            }
                        
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">

                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {
                                person.posts.length
                            }
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.isAdmin ? "Admin" : "Normal"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <span className="text-indigo-600 hover:text-indigo-900">
                            Edit
                        </span>
                    </td>
                </tr>
            })}
        </table>
    )
}

export default AdminPanelComp
