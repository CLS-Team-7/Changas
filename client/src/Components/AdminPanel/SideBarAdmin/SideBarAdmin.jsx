import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function SideBarAdmin({
    sidebarOpen,
    setSidebarOpen
}) {

    const { user } = useAuth0()

    const location = useLocation();
    const { pathname } = location;
    const page = pathname.split('/')[1];

    const trigger = useRef(null);
    const sidebar = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div className="lg:w-64">
            {/* Sidebar backdrop (mobile only) */}
            <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
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
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>
                    {/* Logo */}
                    <img
                        className="h-8 w-8 rounded-full"
                        src={user.picture}
                        alt=""
                    />
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">Administracion</h3>
                    <ul className="mt-3">

                        {/* Team */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page.startsWith('team-') && 'bg-gray-900'}`}>
                            <NavLink exact to="/admin" className={`block text-gray-200 hover:text-white transition duration-150 ${page.startsWith('team-') && 'hover:text-gray-200'}`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-grow">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="text-sm font-medium">Usuario</span>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        {/* Create User */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page.startsWith('team-') && 'bg-gray-900'}`}>
                            <NavLink exact to="/admin/createuser" className={`block text-gray-200 hover:text-white transition duration-150 ${page.startsWith('team-') && 'hover:text-gray-200'}`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-grow">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                        </svg>
                                        <span className="text-sm font-medium">Crear Usuario</span>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        {/* Post */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page.startsWith('team-') && 'bg-gray-900'}`}>
                            <NavLink exact to="/admin/post" className={`block text-gray-200 hover:text-white transition duration-150 ${page.startsWith('team-') && 'hover:text-gray-200'}`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-grow">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                        <span className="text-sm font-medium">Total de posteos</span>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        {/* Tasks */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'tasks' && 'bg-gray-900'}`}>
                            <NavLink exact to="/admin/createpost" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'tasks' && 'hover:text-gray-200'}`}>
                                <div className="flex flex-grow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                    <span className="text-sm font-medium">Nuevos Posts</span>
                                </div>
                            </NavLink>
                        </li>

                        {/* Campaigns */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'campaigns' && 'bg-gray-900'}`}>
                            <NavLink exact to="/admin/category" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'campaigns' && 'hover:text-gray-200'}`}>
                                <div className="flex flex-grow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                    </svg>
                                    <span className="text-sm font-medium">Categorias/Especialidades</span>
                                </div>
                            </NavLink>
                        </li>
                        {/* Settings */}
                        {/* <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'settings' && 'bg-gray-900'}`}>
                            <NavLink exact to="/admin/category" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'settings' && 'hover:text-gray-200'}`}>
                                <div className="flex flex-grow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm font-medium">Configuracion</span>
                                </div>
                            </NavLink>
                        </li> */}
                        {/* Settings */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'settings' && 'bg-gray-900'}`}>
                            <NavLink exact to="/admin/reports" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'settings' && 'hover:text-gray-200'}`}>
                                <div className="flex flex-grow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="text-sm font-medium">Report</span>
                                </div>
                            </NavLink>
                        </li>
                        {/* Settings */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'settings' && 'bg-gray-900'}`}>
                            <NavLink exact to="/admin/orders" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'settings' && 'hover:text-gray-200'}`}>
                                <div className="flex flex-grow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                    <span className="text-sm font-medium">Orders</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default SideBarAdmin
