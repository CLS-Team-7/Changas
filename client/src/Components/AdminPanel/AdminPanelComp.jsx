
import React from 'react'

function AdminPanelComp({ Users }) {
    return (
        < tbody className="bg-white divide-y divide-gray-200 ">
            {Users.map(person => {
                return <tr key={person.id}>
                    <td className="px-6 py-4 whitespace-nowrap py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 " >
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={person.photo} alt="" />
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{`${person.firstName} ${person.lastName}`}</div>
                                <div className="text-sm text-gray-500">{person.email}</div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.address}</div>
                        <div className="text-sm text-gray-500">{person.phoneNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {
                                person.isActive ? "Active" : "disabled"
                            }
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.isAdmin ? "Admin" : "Normal"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Edit
                        </a>
                    </td>
                </tr>
            })}
        </tbody>
    )
}

export default AdminPanelComp
