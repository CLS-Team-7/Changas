import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../../Redux/actions';
import Pagination from '../../Pagination/Pagination';
import OrdersComp from './OrdersComp';

function Orders() {
    const dispatch = useDispatch()
    const ordersList = useSelector(state => state.ordersList)
    const [order, setOrder] = useState([]);
    const [currentOrder, setCurrentOrder] = useState(1);
    const orderPerPage = 6;
    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])

    useEffect(() => {
        setOrder(ordersList)
    }, [ordersList])


    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentOrder(pageNumber);
    }

    const indexOfLastOrder = currentOrder * orderPerPage;
    const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
    const OrderReports = order.slice(indexOfFirstOrder, indexOfLastOrder);
    return (
        <div className="flex flex-col">
            <div /* className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-8" */>
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:pl-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <div className="min-w-full divide-y divide-gray-200">
                            <div className="bg-gray-50">
                            </div>
                            <div className="bg-white divide-y divide-gray-200">
                                <OrdersComp order={OrderReports} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <Pagination ctsPerPage={orderPerPage} totalCts={order.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default Orders
