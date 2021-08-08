import React, { useState, useEffect } from 'react';
import { postUser } from '../../../Redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function ComponentUser() {

    const { push } = useHistory()
    const dispatch = useDispatch();
    //const actList = useSelector(state => state.activitiesList);
    // let id = 2000;

    const [input, setInput] = useState({
        sub: '',    // ver con auth0
        given_name: '',
        family_name: '',
        age: '',
        ID_Passport: '',
        address: '',
        phoneNumber: '',
        email: '',
        summary: '',
        picture: '',
        score: 0,
        jobsDone: 0,
        isVaccinated: true,
        isNew: true,
        isAdmin: false,
        isActive: true,

    });



    const [errors, setErrors] = useState({});


    function validate(input) {
        if (!input.given_name) {
            errors.given_name = 'Ingresa tu nombre'
        }
        if (!input.family_name) {
            errors.family_name = 'Ingresa tu apellido'
        }

        if (!input.age) {
            errors.age = 'Ingresa tu edad'
        }

        if (!input.ID_Passport) {
            errors.ID_Passport = 'Ingresa tu DNI o Pasaporte '
        }

        if (!input.address) {
            errors.address = 'Ingresa tu domicilio'
        }

        if (!input.phoneNumber) {
            errors.phoneNumber = 'Ingresa tu numero de teléfono'
        }
        if (!input.email) {
            errors.email = 'Ingresa tu email'
        }
        if (!input.picture) {
            errors.picture = 'Ingresa un link válido de tu foto'
        }

        return errors;
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (input.given_name === '' || input.family_name === '' || input.age <= 0 || input.ID_Passport === ''
            || input.address === '' || input.phoneNumber === '' || input.email === '' || input.picture === '' || input.score === '') {
            alert('Los parámetros no son válidos. Por favor, revisa los campos')
            setErrors({});
            return
        }
        dispatch(postUser(input));
        alert('Usuario creado con éxito!');
        push("/admin")
    }


    function handleChange(e) {
        const newInput = {
            ...input,
            [e.target.name]: e.target.value
        };
        setErrors(validate(newInput));
        setInput(newInput);
    }

    /* function handleSelectChange(e) {
        let selectedItems = Array.from(e.target.selectedOptions, opt => opt.value);
        const newInput = {
            ...input,
            countryId: selectedItems
        };
        setErrors(validate(newInput));
        setInput(newInput);
    } */


    return (
        <div id='finalWrapperForm' className="flex bg-white items-center justify-center" /* md:mt-20 md:mb-36 sm:mt-72 sm:mb-96" */>
            <div id='actFormWrapper' className="grid bg-gray-300 rounded-lg shadow-2xl overflow-hidden w-11/12 md:w-9/12 lg:w-1/2 mt-16 mb-16 pt-6">
                <div id='formH1' className="text-gray-600 font-bold md:text-2xl text-xl"><h1>Crear usuario</h1></div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid grid-cols-1 mt-5 mx-7 ">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">NOMBRE: </label>
                        <input
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name='given_name'
                            placeholder='Escribe aquí...'
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">APELLIDO: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name='family_name'
                            placeholder='Escribe aquí...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">EDAD: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="number"
                            min="18"
                            max="99"
                            name='age'
                            placeholder='age...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">DNI / PASAPORTE: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name='ID_Passport'
                            placeholder='Escribe aquí...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Domicilio: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name='address'
                            placeholder='Escribe aquí...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Teléfono: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name='phoneNumber'
                            placeholder='Escribe aquí...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">E-mail: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="email"
                            name='email'
                            placeholder='Escribe aquí...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Descripción: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="textarea"
                            name='summary'
                            placeholder='Escribe aquí...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Foto: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name='picture'
                            placeholder='Escribe aquí...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Puntaje: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="number"
                            min="0"
                            max="5"
                            name='score'
                            placeholder='Escribe aquí...'
                            onChange={handleChange}
                        />
                    </div>


                    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                        <button id='formButtonFF' type='submit' className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Enviar</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default ComponentUser

