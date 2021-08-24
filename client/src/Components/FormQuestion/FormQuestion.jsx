import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postQuestion } from '../../Redux/actions' // aca va air la action postQuestion
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import { useAuth0 } from "@auth0/auth0-react";

export default function AddFormQuestion(props) { // falta chequear tambien que el mismo usuario no se haga preguntas a si mismo, ternario en el boton enviar
  // const { user } = useAuth0();
  const dispatch = useDispatch();
  const { push } = useHistory()
  const singlePost = useSelector(state => state.singlePost)
  const userLogin = useSelector(state => state.userLogin);

  // console.log(user)
  //const user = useSelector(state => state.userAdmin);
  //const post = useSelector(state => state.postList);
  console.log(userLogin)

  const [postInput, setPostInput] = useState({
    user_id: userLogin.id,
    post_id: singlePost.id,
    question: "",
  })
  // useEffect(() => {
  //   dispatch(getUserAdmin())
  //   dispatch(getAllPosts())
  // }, [dispatch])
  function handleChange(e) {
    setPostInput(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postQuestion(postInput))
    alert("¡Tu pregunta fue enviada! El dueño de la publicación fue notificado.")
    push(`/posts/${singlePost.id}`) //La pregunta se va a mostrar, el usuario la tiene que responder desde su panel
  }

  return (
    <div>
      <Header />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="min-h-screen bg-gradient-to-b from-Medium__Champagne py-6 flex flex-col justify-center py-12">
          <div className="p-3 max-w-md mx-auto">
            <div className="bg-white min-w-2xl flex flex-col rounded-xl shadow-lg">
              <div className="px-12 py-5">

                <h2 className="text-gray-800 text-3xl font-semibold">¿Cuál es tu pregunta?</h2>
              </div>
              <div className="bg-gray-700 w-full flex flex-col items-center rounded-b-xl">
                <div className="flex flex-col items-center py-6 space-y-3 w-11/12 md:w-9/12">
                  <div className="grid grid-cols-1">
                    <p className=" m-2 md:text-sm text-xs text-gray-100 text-light font-semibold text-center">
                      El dueño de la publicación será notificado de tu pregunta y la misma se verá en el detalle de la publicación.</p>
                    <p className=" m-2 md:text-sm text-xs text-gray-100 text-light font-semibold">
                      Por favor, leé atentamente la publicación antes de preguntar algo que quizás ya fue respondido allí.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 w-11/12 md:w-9/12">
                    <label className="uppercase md:text-sm text-xs text-gray-100 text-light font-semibold">- Publicación -</label>
                    <input name="post_id" disabled value={singlePost.title} className="text-center text-gray-100 py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                  </div>

                </div>
                <div className="w-11/12 md:w-9/12 flex flex-col">

                  <textarea rows="3" name="question" className="p-4 text-gray-500 rounded-xl resize-none" onChange={handleChange} autoComplete="off" placeholder="Tu pregunta aquí..." />

                  <button type='submit' onClick={(e) => handleSubmit(e)} className="py-3 my-8 text-lg rounded-xl text-white  bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded">Enviar</button>
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
