import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getAllCategory, getAllSpecialty, sendPost } from '../../../Redux/actions';

function CreatePostUserComp() {
    const { push } = useHistory()
    const dispatch = useDispatch();
    //ESTO ES PARA LA DEMO//
    const user = useSelector(state => state.userLogin)
    const category = useSelector(state => state.categoryPost)


    useEffect(() => {
        dispatch(getAllCategory())
        dispatch(getAllSpecialty())
    }, [dispatch])



    /* console.log(category) */
    /* console.log(specialty) */
    const [specialtyBeta, setSpecialtyBeta] = useState([])
    const [postInput, setPostInput] = useState({
        user_id: user?.id,
        typePost: "",
        title: "",
        description: "",
        image: "https://www.ucmq.com/wp-content/uploads/dia-del-trabajador-.jpg",
        timeRange: [],
        priceRange: [],
        category_id: "",
        specialty_id: "",
        paymentMethods: [],
        workingArea: []
    })

    async function specialtyCategory() {
        if (postInput.category_id.length !== 0) {
            const result = category.find(e => e.id.toString() === postInput.category_id)
            const specialtys = result.specialties.map(e => {
                return { title: e.title, id: e.id }
            })
            setSpecialtyBeta(specialtys)
        }
    }


    function handleChange(e) {
        setPostInput(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const handleClickCategory = () => {
        specialtyCategory()
    }



    function handleChangeArray(e) {
        setPostInput(values => ({
            ...values,
            [e.target.name]: [e.target.value]
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(sendPost(postInput))
        push("/home")
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex bg-white items-center justify-center md:mt-20 md:mb-36 sm:mt-72 sm:mb-96">
                <div className="grid bg-gray-300 rounded-lg shadow-2xl overflow-hidden w-11/12 md:w-9/12 lg:w-1/2 ">
                    <div className="flex justify-center py-4">
                    </div>

                    <div className="flex justify-center">
                        <div className="flex">
                            <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Crear Post</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Tipo de posteo</label>
                            <select onChange={handleChange} name="typePost" className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                <option>Elegir</option>
                                <option value="Petition" >Solicitar Servicio</option>
                                <option value="Offer" >Ofrecer Servicio</option>
                            </select>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Titulo</label>
                        <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Titulo" onChange={handleChange} name="title" autoComplete="off" />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Descripción</label>
                        <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="textarea" placeholder="Descripción" onChange={handleChange} name="description" autoComplete="off" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Area de trabajo</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Area de trabajo" name="workingArea" onChange={handleChangeArray} autoComplete="off" />
                        </div>
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Precio Base</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 3" name="priceRange" onChange={handleChangeArray} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Metodos de pago</label>
                            <select className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="paymentMethods" onChange={handleChangeArray} >
                                <option>Elegir</option>
                                <option value="Mercado Pago">Mercado Pago</option>
                                <option value="Efectivo">Efectivo</option>
                                <option value="Transferencia">Transferencia</option>
                                <option value="A convenir">A convenir</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Horarios</label>
                            <select className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="timeRange" onChange={handleChangeArray} >
                                <option>Elegir</option>
                                <option value="Mañana">Mañana</option>
                                <option value="Tarde">Tarde</option>
                                <option value="Noche">Noche</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Categoria</label>{
                                <select className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" onChange={handleChange} onClick={handleClickCategory} name="category_id">
                                    <option value="Null">Elegir</option>
                                    {category.length !== 0 ?

                                        category.map(e => {
                                            return <option value={e.id} key={e.id}>{e.title}</option>
                                        })

                                        : <option>Cargando...</option>
                                    }
                                </select>
                            }
                        </div>

                        {
                            specialtyBeta.length !== 0 ?
                                <div className="grid grid-cols-1 mt-5 mx-7">
                                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Especialidad</label>
                                    <select className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" onChange={handleChange} name="specialty_id">
                                        <option value="Null">Elegir</option>
                                        {specialtyBeta.map(e => {
                                            return <option value={e.id} key={e.id}>{e.title}</option>
                                        })
                                        }
                                    </select>
                                </div>
                                :
                                <div className="grid grid-cols-1 mt-5 mx-7">
                                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Especialidad</label>
                                </div>
                        }
                    </div>

                    {/* <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                        <div className='flex items-center justify-center w-full'>
                            <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                                <div className='flex flex-col items-center justify-center pt-7'>
                                    <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Select a photo</p>
                                </div>
                                <input type='file' className="hidden" />
                            </label>
                        </div>
                    </div> */}
                    {
                        user?.isDataComplete ?
                            <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                                <Link to="/home"><button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancelar</button></Link>
                                <button type='submit' className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Crear</button>
                            </div>
                            :
                            <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                                <label className="uppercase md:text-sm text-xs text-gray-600 text-light font-semibold"> Completa tus datos por favor</label>
                                <Link to="/user/config"><button className='w-auto bg-red-500 hover:bg-red-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Completar Datos</button></Link>

                            </div>
                    }
                </div>
            </div>
        </form>
    )
}

export default CreatePostUserComp