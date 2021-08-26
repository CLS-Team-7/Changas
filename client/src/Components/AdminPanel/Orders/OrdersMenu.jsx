import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../../Redux/actions'
import SideBarAdmin from '../SideBarAdmin/SideBarAdmin'
import Orders from './Orders'

function OrdersMenu() {
    const dispatch = useDispatch()
    const orderList = useSelector(state => state.ordersList)
    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])
    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
            <div className="flex items-start justify-between">

                <SideBarAdmin />
                <div className="flex flex-col w-full md:space-y-4">

                    <div className="overflow-auto h-screen pb-24 py-12 px-4 md:px-6">

                        <h2 className="mb-8 text-md text-gray-400">
                            En este panel podras manejar los reports.
                        </h2>
                        <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                            <div className="flex items-center w-full md:w-1/2 space-x-4">
                                <div className="w-1/2">
                                    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                        <p className="text-2xl text-black dark:text-white font-bold">
                                            {orderList.length}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            Ordenes
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                            <div className="flex items-center w-full md:w-1/2 space-x-4">

                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-400">
                                Lista de ordenes
                            </span>
                        </div>
                        <div /* className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4" */>
                            <Orders />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default OrdersMenu
