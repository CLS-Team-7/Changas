import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import React, { useEffect } from 'react'
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { getAllCategory } from '../../Redux/actions';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function SelectServiceFilter() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch])


    return (
        <Menu as="div" className="relative inline-block text-left z-40 focus:outline-none">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Tipo de publicaciones
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link to="/filter/offer"><h1
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    {"Ofertas de servicios"}
                                </h1></Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link to="/filter/petition"><h1
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    {"Solicitudes de servicios"}
                                </h1></Link>
                            )}
                        </Menu.Item>

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default SelectServiceFilter
