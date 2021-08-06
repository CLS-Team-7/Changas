import React, { useState, useEffect } from 'react';
import { postUser } from '../../../Redux/actions';
import { useDispatch } from 'react-redux';


function ComponentUser() {
   

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
    
            if (!input.phoneNumber){
                errors.phoneNumber = 'You have to add a phone number'
            }
            if (!input.email){
                errors.email = 'You have to add an email'
            }
            if (!input.photo){
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
            <div id='finalWrapperForm'>
                <div id='actFormWrapper'>
                    <div id='formH1'><h1>Create User</h1></div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='divForInputs'>
                            <div>firstName: </div>
                            <input
                                className='formInput'
                                type="text"
                                name='firstName'
                                placeholder='firstName...'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='divForInputs'>
                            <div>lastName: </div>
                            <input
                                className='formInput'
                                type="text"
                                name='lastName'
                                placeholder='lastName...'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='divForInputs'>
                            <div>age: </div>
                            <input
                                className='formInput'
                                type="number"
                                name='age'
                                placeholder='age...'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='divForInputs'>
                            <div>ID_Passport: </div>
                            <input
                                className='formInput'
                                type="number"
                                name='ID_Passport'
                                placeholder='ID_Passport...'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='divForInputs'>
                            <div>address: </div>
                            <input
                                className='formInput'
                                type="text"
                                name='address'
                                placeholder='address...'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='divForInputs'>
                            <div>phoneNumber: </div>
                            <input
                                className='formInput'
                                type="number"
                                name='phoneNumber'
                                placeholder='phoneNumber...'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='divForInputs'>
                            <div>email: </div>
                            <input
                                className='formInput'
                                type="email"
                                name='email'
                                placeholder='email...'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='divForInputs'>
                            <div>photo: </div>
                            <input
                                className='formInput'
                                type="text"
                                name='photo'
                                placeholder='photo...'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='divForInputs'>
                            <div>score: </div>
                            <input
                                className='formInput'
                                type="number"
                                name='score'
                                placeholder='score...'
                                onChange={handleChange}
                            />
                        </div>

                            
    
                        <button id='formButtonFF' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default ComponentUser

