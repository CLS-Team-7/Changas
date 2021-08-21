import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function SideBarUser({ sidebarOpen, setSidebarOpen }) {
  const { user } = useAuth0()

  const location = useLocation()
  const { pathname } = location
  const page = pathname.split('/')[1]

  const trigger = useRef(null)
  const sidebar = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
            Bienvenido {user?.given_name}
          </h3>
          <ul className="mt-3">
            {/* Team */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page.startsWith('team-') && 'bg-gray-900'
                }`}
            >
              <NavLink
                exact
                to="/user"
                className={`block text-gray-200 hover:text-white transition duration-150 ${page.startsWith('team-') && 'hover:text-gray-200'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <svg
                      className="flex-shrink-0 h-6 w-6 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className={`fill-current text-gray-600 ${page.startsWith('team-') && 'text-indigo-500'
                          }`}
                        d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                      />
                      <path
                        className={`fill-current text-gray-400 ${page.startsWith('team-') && 'text-indigo-300'
                          }`}
                        d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Mis datos</span>
                  </div>
                </div>
              </NavLink>
            </li>
            {/* Tasks */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'tasks' && 'bg-gray-900'
                }`}
            >
              <NavLink
                exact
                to="/user/posts"
                className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'tasks' && 'hover:text-gray-200'
                  }`}
              >
                <div className="flex flex-grow">
                  <svg
                    className="flex-shrink-0 h-6 w-6 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={`fill-current text-gray-600 ${page === 'tasks' && 'text-indigo-500'
                        }`}
                      d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                    />
                    <path
                      className={`fill-current text-gray-600 ${page === 'tasks' && 'text-indigo-500'
                        }`}
                      d="M1 1h22v23H1z"
                    />
                    <path
                      className={`fill-current text-gray-400 ${page === 'tasks' && 'text-indigo-300'
                        }`}
                      d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Mis Publicaciones</span>
                </div>
              </NavLink>
            </li>
            {/* Create User */}
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page.startsWith('team-') && 'bg-gray-900'
                }`}
            >
              <NavLink
                exact
                to="/user/config"
                className={`block text-gray-200 hover:text-white transition duration-150 ${page.startsWith('team-') && 'hover:text-gray-200'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <svg
                      className="flex-shrink-0 h-6 w-6 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className={`fill-current text-gray-600 ${page === 'settings' && 'text-indigo-500'
                          }`}
                        d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
                      />
                      <path
                        className={`fill-current text-gray-400 ${page === 'settings' && 'text-indigo-300'
                          }`}
                        d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
                      />
                      <path
                        className={`fill-current text-gray-600 ${page === 'settings' && 'text-indigo-500'
                          }`}
                        d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
                      />
                      <path
                        className={`fill-current text-gray-400 ${page === 'settings' && 'text-indigo-300'
                          }`}
                        d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Configuracion de cuenta
                    </span>
                  </div>
                </div>
              </NavLink>
            </li>

            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page.startsWith('team-') && 'bg-gray-900'
                }`}
            >
              <NavLink
                exact
                to="/user/reviews"
                className={`block text-gray-200 hover:text-white transition duration-150 ${page.startsWith('team-') && 'hover:text-gray-200'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <svg
                      className="flex-shrink-0 h-6 w-6 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </svg>
                    <span className="text-sm font-medium">Mis Reseñas</span>
                  </div>
                </div>
              </NavLink>
            </li>
            <li
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page.startsWith('team-') && 'bg-gray-900'
                }`}
            >
              <NavLink
                exact
                to="/user/questions"
                className={`block text-gray-200 hover:text-white transition duration-150 ${page.startsWith('team-') && 'hover:text-gray-200'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <svg
                      className="flex-shrink-0 h-6 w-6 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </svg>
                    <span className="text-sm font-medium">Preguntas recibidas</span>
                  </div>
                </div>
              </NavLink>
            </li>

            {/* Campaigns */}
            {/* <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'campaigns' && 'bg-gray-900'}`}>
                            <NavLink exact to="/admin/category" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'campaigns' && 'hover:text-gray-200'}`}>
                                <div className="flex flex-grow">
                                    <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                                        <path className={`fill-current text-gray-600 ${page === 'campaigns' && 'text-indigo-500'}`} d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                                        <path className={`fill-current text-gray-400 ${page === 'campaigns' && 'text-indigo-300'}`} d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                                    </svg>
                                    <span className="text-sm font-medium">Categorias/Especialidades</span>
                                </div>
                            </NavLink>
                        </li> */}
            {/* Settings */}
            {/* <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'settings' && 'bg-gray-900'}`}>
                            <NavLink exact to="/admin/category" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'settings' && 'hover:text-gray-200'}`}>
                                <div className="flex flex-grow">
                                    <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                                        <path className={`fill-current text-gray-600 ${page === 'settings' && 'text-indigo-500'}`} d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
                                        <path className={`fill-current text-gray-400 ${page === 'settings' && 'text-indigo-300'}`} d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
                                        <path className={`fill-current text-gray-600 ${page === 'settings' && 'text-indigo-500'}`} d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
                                        <path className={`fill-current text-gray-400 ${page === 'settings' && 'text-indigo-300'}`} d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
                                    </svg>
                                    <span className="text-sm font-medium">Configuracion</span>
                                </div>
                            </NavLink>
                        </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBarUser
