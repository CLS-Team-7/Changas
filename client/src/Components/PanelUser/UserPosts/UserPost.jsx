import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserpostsComp from './UserPostsComp';
import SideBarUser from "../SideBarUser/SideBarUser"
import { getAllPosts } from '../../../Redux/actions';

function UserPost() {
    const postUsers = useSelector(state => state.postList)
    const userLogin = useSelector(state => state.userLogin)
    const dispatch = useDispatch()

    const FilterPost = postUsers.filter(e => e.user?.id === userLogin.id)
    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])



    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden  lg:flex-col pt:2">
            <div className="flex items-start justify-between">

                <SideBarUser />
                <div className="flex flex-col w-full md:space-y-4">

                    <div className="overflow-auto h-screen pb-24 py-12 px-4 md:px-6">

                        <div /* className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4" */>
                            <div className="bg-white divide-y divide-gray-200 flex justify-center">
                                {FilterPost.length > 0
                                    ? <UserpostsComp Users={FilterPost} />
                                    : <h1 className=''>Aun no has realizado ninguna publicación</h1>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default UserPost
