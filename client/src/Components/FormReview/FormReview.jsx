import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, getUserAdmin, postReview } from '../../Redux/actions'
export default function AddFormReview(props) {

  const dispatch = useDispatch();
  const { push } = useHistory()

  //const user = useSelector(state => state.userAdmin);
  //const post = useSelector(state => state.postList);
  const singlePost = useSelector(state => state.singlePost)
  const userLogin = useSelector(state => state.userLogin);

  const [postInput, setPostInput] = useState({
    user_id: "",
    post_id: "",
    rating: null,
    description: "",
  })
  useEffect(() => {
    dispatch(getUserAdmin())
    dispatch(getAllPosts())
}, [dispatch])
  function handleChange(e) {
    setPostInput(values => ({
        ...values,
        [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postReview(postInput))
    push("/home")
}

  return (
<div>
  <form onSubmit={(e) => handleSubmit(e)}>
  <div class="min-h-screen bg-yellow-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="py-3 sm:max-w-xl sm:mx-auto">
    <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
      <div class="px-12 py-5">
        <h2 class="text-gray-800 text-3xl font-semibold">Califica el servicio</h2>
      </div>
      <div class="bg-blue-200 w-full flex flex-col items-center">
        <div class="flex flex-col items-center py-6 space-y-3">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Nombre de Usuario</label>
          <select onChange={handleChange} name="user_id" className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
        <option>Elegir</option>
        {[userLogin]?.length !== 0 ?
            [userLogin]?.map(e => {
                return <option value={e.id} key={e.id}>{e.fullName}</option>
            }) :
            <option>Cargando...</option>
        }
    </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Publicación</label>
            <select onChange={handleChange} name="post_id" className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
        <option>Elegir</option>
        {[singlePost]?.length !== 0 ?
            [singlePost]?.map(e => {
                return <option value={e.id} key={e.id}>{e.title}</option>
            }) :
            <option>Cargando...</option>
        }
    </select>
          </div>
          <select onChange={handleChange} name='rating'  className="w-50  border  hover:border-gray-500 px-4 py-2 pr-8 rounded  ">
            <option>Calificación</option>
            <option type='number' value='1'>1 ⭐</option>
            <option type='number' value="2">2 ⭐⭐</option>
            <option type='number' value="3">3 ⭐⭐⭐</option>
            <option type='number' value="4">4 ⭐⭐⭐⭐</option>
            <option type='number' value="5">5 ⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <div class="w-3/4 flex flex-col">
          <textarea rows="3" name="description" class="p-4 text-gray-500 rounded-xl resize-none" onChange={handleChange}  autoComplete="off">Cuéntanos tu experiencia con el servicio</textarea>
          <button type='submit' onClick={(e) => handleSubmit(e)} class="py-3 my-8 text-lg rounded-xl text-white  bg-indigo-500 border-0 focus:outline-none hover:bg-green-600 rounded">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
</div>
)}
