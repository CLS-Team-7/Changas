import React, { useState, useEffect } from 'react';
import { postUser } from '../../../Redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function ComponentUser() {

    const { push } = useHistory()
    const dispatch = useDispatch();
    //const actList = useSelector(state => state.activitiesList);
    let id = 2000;

    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        age: '',
        ID_Passport: '',
        address: '',
        phoneNumber: '',
        email: '',
        photo: '',
        score: 0,
        jobDone: 0,
        isVaccinated: true,
        isNew: true,
        isAdmin: false,
        isActive: true,
        id: ++id,
    });



    const [errors, setErrors] = useState({});


    function validate(input) {
        if (!input.firstName) {
            errors.firstName = 'You have to put a first name'
        }
        if (!input.lastName) {
            errors.lastName = 'You have to put a last name'
        }

        if (!input.age) {
            errors.age = 'You have to set an age'
        }

        if (!input.ID_Passport) {
            errors.ID_Passport = 'You have to add a DNI'
        }

        if (!input.address) {
            errors.address = 'You have to add an address'
        }

        if (!input.phoneNumber) {
            errors.phoneNumber = 'You have to add a phone number'
        }
        if (!input.email) {
            errors.email = 'You have to add an email'
        }
        if (!input.photo) {
            errors.photo = 'You have to add a photo'
        }

        return errors;
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (input.firstName === '' || input.lastName === '' || input.age <= 0 || input.ID_Passport === ''
            || input.address === '' || input.phoneNumber === '' || input.email === '' || input.photo === '' || input.score === '') {
            alert('Invalid parameters')
            setErrors({});
            return
        }
        dispatch(postUser(input));
        alert('User Created');
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
                <div id='formH1' className="text-gray-600 font-bold md:text-2xl text-xl"><h1>Create User</h1></div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid grid-cols-1 mt-5 mx-7 ">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">firstName: </label>
                        <input
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name='firstName'
                            placeholder='firstName...'
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">lastName: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name='lastName'
                            placeholder='lastName...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">age: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="number"
                            name='age'
                            placeholder='age...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">ID_Passport: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="number"
                            name='ID_Passport'
                            placeholder='ID_Passport...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">address: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name='address'
                            placeholder='address...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">phoneNumber: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="number"
                            name='phoneNumber'
                            placeholder='phoneNumber...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">email: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="email"
                            name='email'
                            placeholder='email...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">photo: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name='photo'
                            placeholder='photo...'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">score: </label>
                        <input
                            autoComplete="off"
                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="number"
                            name='score'
                            placeholder='score...'
                            onChange={handleChange}
                        />
                    </div>


                    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                        <button id='formButtonFF' type='submit' className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Submit</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default ComponentUser

