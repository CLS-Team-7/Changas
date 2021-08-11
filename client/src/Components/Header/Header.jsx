import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useAuth0, User } from "@auth0/auth0-react";
import { getUserAdmin, postUser, searchByTitle } from "../../Redux/actions";
import { v4 as uuidv4 } from 'uuid'

var Logeado = false
var dni = uuidv4()

function Header() {
  console.log(dni)
  const { logout, isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [title, setTitle] = useState("");
  const [accountUser, setAccountUser] = useState({
    sub: user?.sub,
    given_name: user?.given_name,
    family_name: user?.family_name,
    email: user?.email,
    picture: user?.picture,
    ID_Passport: dni,
    address: 'Sin Completar',
    phoneNumber: 'Sin Completar',
    summary: '0',
    score: 0,
    jobsDone: 0,
    isVaccinated: true,
    isNew: true,
    isAdmin: false,
    isActive: true,
    age: 0
  })
  const dispatch = useDispatch();
  const { push } = useHistory();


  //////////acount create//////////////
  if (Logeado === false) {
    if (accountUser.sub !== undefined && accountUser.given_name !== undefined) {
      dispatch(postUser(accountUser))
      Logeado = true
    }
  }

  const handleClickLogout = () => {
    logout()
    Logeado = false
  }
  //////////////////////////////////////
  /////////////// usermenu/////////////



  function handleSubmit(e) {
    e.preventDefault();
    setTitle("");
  }

  function handleClick() {
    dispatch(searchByTitle(title))
    push(`/search/${title}`)
  }


  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link
                      to="/home"
                      className="flex title-font font-medium items-center  mb-4 md:mb-0"
                    >
                      <img
                        className="flex title-font font-medium items-center   sm:justify-items-center "
                        width="120"
                        src="https://media.discordapp.net/attachments/868284643886120985/872487883771092992/2.png?width=1019&height=219"
                        alt="Workflow"
                      />
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {

                        <Link
                          to="/admin"
                          className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Panel Admin
                        </Link>
                      }
                      <Link
                        to="/faq"
                        className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        FAQ
                      </Link>
                      <Link
                        to="/about"
                        className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Sobre Nosotros
                      </Link>
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="pt-2 relative mx-auto text-gray-600" >
                          <input
                            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="search"
                            name="search"
                            placeholder="Busqueda" />
                          <button onClick={() => handleClick()} type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                            <svg
                              className="text-gray-600 h-4 w-4 fill-current"
                              version="1.1"
                              id="Capa_1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 56.966 56.966"
                              width="512px"
                              height="512px">
                              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
                    {isAuthenticated === true ? (
                      <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                          <>
                            <div>
                              <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.picture}
                                  alt=""
                                />
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
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                              >
                                <div className="mt-3 px-2 space-y-1">
                                  <div className="flex flex-row justify-start items-center place-content-center">
                                    <div className="text-black ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                      </svg>
                                    </div>
                                    <Link
                                      to="/myproftest"
                                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-300"
                                    >
                                      Mi Perfil
                                    </Link>
                                  </div>
                                  <div className="flex flex-row justify-start items-center place-content-center">
                                    <div className="text-black">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                      </svg>
                                    </div>
                                    <Link
                                      to=""
                                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-300"
                                    >
                                      Configuracion
                                    </Link>
                                  </div>
                                  <div className="flex flex-row justify-start items-center place-content-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                      />
                                    </svg>
                                    <button
                                      onClick={handleClickLogout}
                                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-300"
                                    >
                                      Desconectarse
                                    </button>
                                  </div>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    ) : (
                      <button
                        onClick={() => loginWithRedirect()}
                        className="bg-Alloy__Orange text-white text-base font-bold py-1 px-4 border-b-4 border-Mahogany hover:border-Ruby__Red rounded transform hover:scale-105 transition duration-300"
                      >
                        Entrar / Registrarse
                      </button>
                    )}
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/admin"
                  className="  text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Panel Admin
                </Link>
                <Link
                  to="/faq"
                  className=" text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  FAQ
                </Link>
                <Link
                  to="/about"
                  className=" text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sobre Nosotros
                </Link>
              </div>
              {isAuthenticated === true ? (
                <div className="pt-4 pb-3 border-t border-gray-700 ">
                  <div className="flex content-center items-center px-5 flex-col ">
                    <div className="flex-shrink-0 ">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.picture}
                        alt=""
                      />
                    </div>
                    <div className=" flex flex-col content-center mx-auto">
                      <div className="text-base font-medium leading-none text-white pb-2">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <div className="flex flex-row items-center place-content-center">
                      <div className="text-white ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <Link
                        to="/myproftest"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        Mi Perfil
                      </Link>
                    </div>
                    <div className="flex flex-row items-center place-content-center">
                      <div className="text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <Link
                        to=""
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        Configuracion
                      </Link>
                    </div>
                    <div className="flex flex-row  items-center place-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <button
                        onClick={handleClickLogout}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        Desconectarse
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                >
                  Entrar/Registrar
                </button>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Header;

