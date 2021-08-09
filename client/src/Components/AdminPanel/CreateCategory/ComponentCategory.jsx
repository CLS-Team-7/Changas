import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAllCategory, sendCategory, sendSpecialty } from '../../../Redux/actions'

function ComponentCategory() {
    const { push } = useHistory()
    const [categoryPost, setCategoryPost] = useState({ title: "" })
    const [createSpecialty, setCreateSpecialty] = useState({ category_id: "", title: "" })
    const dispatch = useDispatch()


    const category = useSelector(state => state.categoryPost)

    useEffect(() => {
        dispatch(getAllCategory())
    }, [dispatch])

    const handleChangeCategory = (e) => {
        setCategoryPost(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))

    }


    const handleChangeSpecialty = (e) => {
        setCreateSpecialty(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmitCategory = (e) => {
        e.preventDefault()
        dispatch(sendCategory(categoryPost))
        alert("Categoria Creada")
        e.target.value = ""
        push("/admin")
    }

    const handleSubmitSpecialty = (e) => {
        e.preventDefault()
        dispatch(sendSpecialty(createSpecialty))
        alert("Especialidad Creada")
        push("/admin")
    }

    return (
        <>
            <form onSubmit={handleSubmitCategory}>
                <div className="flex bg-white items-center justify-center md:mt-20 md:mb-36 sm:mt-72 sm:mb-96">
                    <div className="grid bg-gray-300 rounded-lg shadow-2xl overflow-hidden w-11/12 md:w-9/12 lg:w-1/2 mt-16 mb-16">
                        <div className="flex justify-center py-4">
                        </div>

                        <div className="flex justify-center">
                            <div className="flex">
                                <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Crear Categoria</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nombre de la Categoria</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Titulo" onChange={handleChangeCategory} name="title" autoComplete="off" />
                        </div>



                        <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                            <button className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Crear</button>
                        </div>
                    </div>
                </div>
            </form>

            <form onSubmit={handleSubmitSpecialty}>
                <div className="flex bg-white items-center justify-center md:mt-20 md:mb-36 sm:mt-72 sm:mb-96">
                    <div className="grid bg-gray-300 rounded-lg shadow-2xl overflow-hidden w-11/12 md:w-9/12 lg:w-1/2 mt-16 mb-16">
                        <div className="flex justify-center py-4">
                        </div>

                        <div className="flex justify-center">
                            <div className="flex">
                                <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Crear Especialidad</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                            <div className="grid grid-cols-1 mt-5 mx-7">
                                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Categoria</label>
                                <select onChange={handleChangeSpecialty} name="category_id" className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                    <option>Elegir</option>
                                    {
                                        category?.map(e => {
                                            return <option value={e.id} key={e.id}>{e.title}</option>
                                        })
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nombre de la Categoria</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Titulo" onChange={handleChangeSpecialty} name="title" autoComplete="off" />
                        </div>



                        <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                            <button className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Crear</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ComponentCategory
