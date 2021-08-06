import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useSelector } from 'react-redux'
import AdminPanel from './AdminPanel'
import SideBarAdmin from './SideBarAdmin/SideBarAdmin'

function MenuAdmin() {
    const userList = useSelector(state => state.userAdmin)
    const { user } = useAuth0()
    return (
        <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
            <div class="flex items-start justify-between">

                <SideBarAdmin />
                <div class="flex flex-col w-full md:space-y-4">

                    <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
                        <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
                            {`Bienvenido ${user.name}`}
                        </h1>
                        <h2 class="text-md text-gray-400">
                            En este panel podras manejar la aplicacion.
                        </h2>
                        <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                            <div class="flex items-center w-full md:w-1/2 space-x-4">
                                <div class="w-1/2">
                                    <div class="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                        <p class="text-2xl text-black dark:text-white font-bold">
                                            {userList.length}
                                        </p>
                                        <p class="text-gray-400 text-sm">
                                            Cuentas Creadas
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <span class="text-sm text-gray-400">
                                Compared to oct 1- otc 30, 2020
                            </span>
                        </div>
                        <div /* class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4" */>
                            <AdminPanel />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MenuAdmin
