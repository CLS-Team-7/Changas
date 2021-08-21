import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, getUserAdmin, postReview } from '../../Redux/actions' // aca va air la action postQuestion
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function AddFormQuestion(props) {

  const dispatch = useDispatch();
  const { push } = useHistory()

  //const user = useSelector(state => state.userAdmin);
  //const post = useSelector(state => state.postList);
  const singlePost = useSelector(state => state.singlePost)
  const userLogin = useSelector(state => state.userLogin);

  const [postInput, setPostInput] = useState({
    user_id: userLogin.id,
    post_id: singlePost.id,
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
    alert("Reseña enviada")
    push(`/posts/${singlePost.id}`) //OJO, antes de que se muestr el review, el dueño del posteo tiene que VALIDARLO
  }

  return (
    <div>
      <Header />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="min-h-screen bg-yellow-100 py-6 flex flex-col justify-center py-12">
          <div class="py-3 max-w-md mx-auto">
            <div class="bg-white min-w-2xl flex flex-col rounded-xl shadow-lg">
              <div class="px-12 py-5">
                <h2 class="text-gray-800 text-3xl font-semibold">¿Cuál es tu pregunta?</h2>
              </div>
              <div class="bg-blue-200 w-full flex flex-col items-center">
                <div class="flex flex-col items-center py-6 space-y-3">
                  <div className="grid grid-cols-1">
                    <p className=" m-2 md:text-sm text-xs text-gray-900 text-light font-semibold text-center">
                      El dueño de la publicación será notificado de tu pregunta y la misma se verá en el detalle de la publicación.</p>
                    <p className=" m-2 md:text-sm text-xs text-gray-900 text-light font-semibold">
                      Por favor, leé atentamente la publicación antes de preguntar algo que quizás ya fue respondido allí.
                    </p>
                  </div>
                  <div className="grid grid-cols-1">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Publicación</label>
                    <input name="post_id" disabled value={singlePost.title} className="text-center py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                  </div>

                </div>
                <div class="w-3/4 flex flex-col">
                  <textarea rows="3" name="description" class="p-4 text-gray-500 rounded-xl resize-none" onChange={handleChange} autoComplete="off" placeholder="Tu pregunta aquí..." />
                  <button type='submit' onClick={(e) => handleSubmit(e)} class="py-3 my-8 text-lg rounded-xl text-white  bg-indigo-500 border-0 focus:outline-none hover:bg-green-600 rounded">Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}
