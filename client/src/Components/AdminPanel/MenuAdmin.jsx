import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../Redux/actions'
import AdminPanel from './AdminPanel'
import SideBarAdmin from './SideBarAdmin/SideBarAdmin'

function MenuAdmin() {
    const userList = useSelector(state => state.userAdmin);
    const categoryList = useSelector(state => state.categoryPost);
    const dispatch = useDispatch();

    useEffect(state => {
        dispatch(getAllCategory());
    }, [dispatch, categoryList])

    const { user } = useAuth0()
    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
            <div className="flex items-start justify-between">

                <SideBarAdmin />
                <div className="flex flex-col w-full md:space-y-4">

                    <div className="overflow-auto h-screen pb-24 py-12 px-4 md:px-6">
                        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                            {`Bienvenido ${user.name}`}
                        </h1>
                        <h2 className="mb-8 text-md text-gray-400">
                            En este panel podras manejar la aplicacion.
                        </h2>
                        <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                            <div className="flex items-center w-full md:w-1/2 space-x-4">
                                <div className="w-1/2">
                                    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                        <p className="text-2xl text-black dark:text-white font-bold">
                                            {userList.length}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            Cuentas Creadas
                                        </p>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                        <p className="text-2xl text-black dark:text-white font-bold">
                                            {categoryList.length}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            Categorias Creadas
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
                                Compared to oct 1- otc 30, 2020
                            </span>
                        </div>
                        <div /* className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4" */>
                            <AdminPanel />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MenuAdmin
