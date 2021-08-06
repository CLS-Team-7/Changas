import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useSelector } from 'react-redux'
import SideBarAdmin from '../SideBarAdmin/SideBarAdmin'
import ComponentCategory from './ComponentCategory'

function CreateCategory() {
    const userList = useSelector(state => state.userAdmin)
    const { user } = useAuth0()
    return (
        <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
            <div class="flex items-start justify-between bg-white">

                <SideBarAdmin />
                <div class="flex flex-col w-full md:space-y-4">

                    <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
                        <div /* class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4" */>
                            <ComponentCategory />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CreateCategory
