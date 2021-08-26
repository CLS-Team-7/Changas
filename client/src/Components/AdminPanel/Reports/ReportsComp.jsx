import React from 'react'
import BottonAdminReports from '../BottonAdmin/Reports/BottonAdminReports'
import DeleteReport from '../BottonAdmin/Reports/DeleteReport'

function ReportsComp({ report }) {
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
                        Tipo de reporte
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Resuelto
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        acciones
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            {report.map(reports => {
                return <tr key={reports.id} className="">
                    <td className="px-6 py-4 whitespace-nowrap py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 " >
                        <div className="flex items-center">
                            <div className="ml-4">
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                </th>
                                <div className="text-sm font-medium text-gray-900">{`${reports.complaint} `}</div>
                                <div className="text-sm text-gray-500">{reports.answer?.answer}</div>
                            </div>
                        </div>
                    </td>


                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {
                                reports.reportSubject
                            }
                        </span>

                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">

                        {
                            reports.isSettled ?
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    true
                                </span> :
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white">
                                    false
                                </span>
                        }
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reports.isAdmin ? "Admin" : "Normal"}</td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <BottonAdminReports data={reports} isSettled={reports.isSettled} isActive={reports.isActive} />
                        <DeleteReport id={reports.id} />
                    </td>
                </tr>
            })}
        </table>
    )
}

export default ReportsComp
