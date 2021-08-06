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
            if (!input.name) {
                errors.name = 'You have to put a name for the activity'
            }
    
            if (!input.difficulty) {
                errors.difficulty = 'You have to set a difficulty for the activity'
            }
    
            if (!input.season) {
                errors.season = 'You have to specify a season for the activity'
            }
    
            if (!input.duration) {
                errors.duration = 'You have to set a duration for the activity'
            } else if (input.duration <= 0) {
                errors.duration = 'Invalid parameter'
            }
    
            if (!input.countryId){
                errors.countryId = 'No countries selected'
            }
    
            return errors;
        }
    
    
        function handleSubmit(e) {
            e.preventDefault();
    
            /* if (input.duration === '' || input.name === '' || input.countryId.length === 0) {
                alert('Invalid parameters')
                setErrors({});
                return
            } */
            dispatch(postUser(input));
            alert('User Created');
        }
    
    
        function handleChange(e) {
            const newInput = {
                ...input,
                [e.target.name]: e.target.value
            };
            /* setErrors(validate(newInput)); */
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

