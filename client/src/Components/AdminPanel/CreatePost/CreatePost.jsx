import React from 'react'
import SideBarAdmin from '../SideBarAdmin/SideBarAdmin'
import ComponentCreatePost from './ComponentCreatePost'

function CreatePost() {
    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
            <div className="flex items-start justify-between bg-white">

                <SideBarAdmin />
                <div className="flex flex-col w-full md:space-y-4">

                    <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                        <div /* className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4" */>
                            <ComponentCreatePost />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CreatePost
