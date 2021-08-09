import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearSingleUser, getUserAdmin } from '../../Redux/actions';
import Pagination from '../Pagination/Pagination';
import AdminPanelComp from './AdminPanelComp';



function AdminPanel() {
    const userList = useSelector(state => state.userAdmin)
    const dispatch = useDispatch()
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(1);
    const userPerPage = 6;

    useEffect(() => {
        setUsers(userList)
    }, [userList])

    useEffect(() => {
        dispatch(getUserAdmin())
        dispatch(clearSingleUser())
    }, [dispatch])

    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentUser(pageNumber);
    }

    const indexOfLastUser = currentUser * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div className="flex flex-col">
            <div /* className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-8" */>
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:pl-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <div className="min-w-full divide-y divide-gray-200">
                            <div className="bg-gray-50">
                            </div>
                            <div className="bg-white divide-y divide-gray-200">
                                <AdminPanelComp Users={currentUsers} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <Pagination ctsPerPage={userPerPage} totalCts={users.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default AdminPanel
