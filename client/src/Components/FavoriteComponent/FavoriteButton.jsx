import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";

const FavoriteButton = () => {

  ////// favorite redux/////

  const favoritePost = useSelector(state => state.favoritePost)
  return (
    <>
      <Menu as="div" className="ml-8 relative ">
        {({ open }) => (

          <>
            <div className="relative  animate-pulse">
              <Menu.Button className="max-w-xs bg-gray-800 select-none rounded-full flex items-center text-sm focus:outline-none  focus:outline-none ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-7 text-red"
                  viewBox="0 0 24 24"
                  stroke={"red"}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>

                <span className="text-white absolute left-2.5 bottom-1.5 ">{favoritePost?.length}</span>
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="origin-top-right absolute right-2 mt-2  rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 "
              >
                <div className="mt-3 px-2 space-y-1">
                  <div className="flex flex-row justify-start items-center place-content-center">
                    {
                      favoritePost.length === 0 ?
                        <div className="flex-auto text-sm w-32 m-4">

                          <h1 className="font-bold">No tienes favoritos</h1>
                        </div>
                        :
                        <FavoriteCard fav={favoritePost} />
                    }


                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
      {/* {showModal ? (
        <>
          <div className="overscroll-none overscroll-behavior: none justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start flex-col justify-between pt-5 pl-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Favoritos ♥
                  </h3>
                  {
                    result.map(e => {
                      return <h1>{e}</h1>
                    })
                  }
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    class="bg-white rounded-md p-2 mr-5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                  </button>
                </div>
                <div className="flex items-center justify-end   rounded-b">
                  <button
                    className="mb-5 mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    <button className="flex ml-auto font-bold text-white bg-indigo-500 border-0 py-3 px-12 focus:outline-none hover:bg-indigo-600 rounded">
                      Cerrar
                    </button>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null} */}
    </>
  );
};
export default FavoriteButton;
