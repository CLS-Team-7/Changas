import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';


function UserDataComp() {
    const { isAuthenticated } = useAuth0();
    const userLogin = useSelector(state => state.userLogin)
    return (
        isAuthenticated && (
            <div>
                <div className="w-full relative mt-0  rounded my-24 overflow-hidden">

                    <div className="grid grid-cols-12 bg-white ">

                        <div className="col-span-12 md:border-solid  h-full pb-12 md:col-span-10">
                            <div className="px-4 pt-4">
                                <form action="#" className="flex flex-col space-y-8">

                                    <div>
                                        <h3 className="text-2xl font-semibold">Información Personal</h3>
                                        <hr />
                                    </div>

                                    <div className="form-item">
                                        <label className="text-xl ">Nombre Completo</label>
                                        <input type="text" value={`${userLogin?.given_name} ${userLogin?.family_name}`} className="text-center w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled />
                                    </div>
                                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                                        <div className="form-item w-full">
                                            <label className="text-xl ">Edad</label>
                                            <input type="text" value={userLogin?.age !== 0 ? userLogin.age : "Sin Completar"} className="text-center w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                                        </div>

                                        <div className="form-item w-full">
                                            <label className="text-xl ">Vacunado</label>
                                            <input type="text" value={userLogin?.isVaccinated ? "Vacunado" : "No vacunado"} className="text-center w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                                        <div className="form-item w-full">
                                            <label className="text-xl ">Email</label>
                                            <input type="text" value={userLogin?.email} className="text-center w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                                        </div>

                                        <div className="form-item w-full">
                                            <label className="text-xl ">Dirección</label>
                                            <input type="text" value={userLogin?.address} className="text-center w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                                        <div className="form-item w-full">
                                            <label className="text-xl ">Teléfono</label>
                                            <input type="text" value={userLogin?.phoneNumber} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                                        </div>

                                        <div className="form-item w-full">
                                            <label className="text-xl ">DNI/Pasaporte</label>
                                            <input type="text" value={userLogin?.ID_Passport?.includes("google") ? "Sin completar" : userLogin?.ID_Passport} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                                        </div>
                                    </div>

                                    <div className="form-item w-full">
                                        <label className="text-xl text-align-left">Descripción</label>
                                        <p cols="30" rows="10" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>{userLogin?.summary === 0 ? "Sin completar" : userLogin?.summary}</p>
                                    </div>

                                    <div className="form-item w-full">
                                        <label className="text-xl ">Puntaje promedio</label>
                                        <input type="text" value={"conectar con back/function"} className="text-center w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                                    </div>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        )
    )
}

export default UserDataComp
