import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllReports } from '../../../Redux/actions'
import Pagination from '../../Pagination/Pagination'
import ReportsComp from './ReportsComp'

function Reports() {

    const dispatch = useDispatch()
    const reportsList = useSelector(state => state.reportsList)
    const [report, setReport] = useState([]);
    const [currentReport, setCurrentUser] = useState(1);
    const reportPerPage = 6;
    useEffect(() => {
        dispatch(getAllReports())
    }, [dispatch])

    useEffect(() => {
        setReport(reportsList)
    }, [reportsList])


    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentUser(pageNumber);
    }

    const indexOfLastReport = currentReport * reportPerPage;
    const indexOfFirstUser = indexOfLastReport - reportPerPage;
    const currentReports = report.slice(indexOfFirstUser, indexOfLastReport);

    return (
        <div className="flex flex-col">
            <div /* className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-8" */>
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:pl-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <div className="min-w-full divide-y divide-gray-200">
                            <div className="bg-gray-50">
                            </div>
                            <div className="bg-white divide-y divide-gray-200">
                                <ReportsComp report={currentReports} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <Pagination ctsPerPage={reportPerPage} totalCts={report.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default Reports
