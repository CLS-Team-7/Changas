import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import './NotFound.css'

function NotFound() {
  return (
    <div className="NotFound">
      <Header />
      <div class="bg-white marginauto dark:bg-gray-800 h-full NotFoundContent min-h-screen">
        <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-red-600 dark:text-white sm:text-4xl">
            <span class="block font-extrabold text-red-600">ERROR 404</span>
            <span class="block text-red-600">No se encontró esa ruta</span>
          </h2>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <Link to="/home">
                <button
                  type="button"
                  class="py-4 px-6  bg-Medium__Champagne focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer class="w-full pin-b" />
    </div>
  )
}

export default NotFound
