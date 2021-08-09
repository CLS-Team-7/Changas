import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuAdmin from '../../Components/AdminPanel/MenuAdmin'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function Admin() {
    const { isAuthenticated } = useAuth0()
    console.log(isAuthenticated)
    return (
        <div className=" min-h-screen flex flex-col justify-between">
            <Header />
            {
                isAuthenticated ? <MenuAdmin />
                    :
                    <div className="NotFound">
                        <div className="bg-white marginauto dark:bg-gray-800 h-full NotFoundContent min-h-screen">
                            <div className="text-center w-full mx-auto   sm:px-6 lg:py-16 lg:px-8 z-20">
                                <h2 className="text-3xl font-extrabold text-red-600 dark:text-white sm:text-4xl">
                                    <span className="block font-extrabold text-Rich__Black">Error 404</span>
                                    <span className="block text-red-600">No estas Autorizado</span>
                                </h2>
                                <div className="lg:mt-0 lg:flex-shrink-0">
                                    <div className="mt-5 inline-flex rounded-md">
                                        <Link to="/home" className="m-5 ">
                                            <button className="transition duration-500 ease-in-out px-10 py-2 transform hover:-translate-y-1 hover:scale-110 rounded-full text-white  bg-Viridian__Green font-bold hover:bg-Blue__Shappire ">
                                                Home
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            }

            <Footer />
        </div>
    )
}

export default Admin
