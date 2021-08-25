import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postReport } from '../../Redux/actions'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useAuth0 } from '@auth0/auth0-react'


export default function AddFormReport(props) { /// chequear tambien que el mismo usuario no se haga preguntas a si mismo, ternario en el boton enviar

  const dispatch = useDispatch();
  const { push, goBack } = useHistory();
  const { id } = useParams();
  const userLogin = useSelector(state => state.userLogin);
  const { isAuthenticated } = useAuth0()

  const [postInput, setPostInput] = useState({
    reportSubject: "user",
    user_id: userLogin.id,
    reported_user: id,
    complaint: "",
  })

  function handleChange(e) {
    setPostInput(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postReport(postInput))
    alert("¡Tu reporte fue enviada! El equipo de CHANGAS fue notificado.")
    push(`/home`)
  }

  return (
    <div>
      <Header />
      {
        isAuthenticated ?

          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="min-h-screen bg-yellow-100 py-6 flex flex-col justify-center py-12">
                <div className="py-3 max-w-md mx-auto">
                  <div className="bg-white min-w-2xl flex flex-col rounded-xl shadow-lg">
                    <div className="px-12 py-5">
                      <h2 className="text-gray-800 text-3xl font-semibold">Contános tus inquietudes / problemas</h2>
                    </div>
                    <div className="bg-blue-200 w-full flex flex-col items-center">
                      <div className="flex flex-col items-center py-6 space-y-3">
                        <div className="grid grid-cols-1">
                          <p className=" m-2 md:text-sm text-xs text-gray-900 text-light font-semibold text-center">
                            Tu reporte será enviado al equipo de CHANGAS.
                          </p>
                          <p className=" m-2 md:text-sm text-xs text-gray-900 text-light font-semibold">
                            Por favor, indicá precisamente cuál es el problema que encontraste con este usuario para que podamos tratarlo
                          </p>
                          <p className=" m-2 md:text-sm text-xs text-gray-900 text-light font-semibold">
                            En caso de corresponder, se tomarán las medidas pertinentes para solucionar el problema.
                          </p>
                          <p className=" m-2 md:text-sm text-xs text-gray-900 text-light font-semibold">
                            ¡Gracias por ayudarnos a mejorar nuestra comunidad!
                          </p>
                        </div>
                        <div className="grid grid-cols-1">
                          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Usuario reportado</label>
                          <input name="post_id" disabled value={userLogin.fullName} className="text-center py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                        </div>

                      </div>
                      <div className="w-3/4 flex flex-col">
                        <textarea rows="3" name="complaint" className="p-4 text-gray-500 rounded-xl resize-none" onChange={handleChange} autoComplete="off" placeholder="Razones / motivos del reporte" />
                        <button type='submit' onClick={(e) => handleSubmit(e)} className="py-3 my-8 text-lg rounded-xl text-white  bg-indigo-500 border-0 focus:outline-none hover:bg-green-600 rounded">Enviar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          :
          goBack()
      }



      <Footer />
    </div>
  )
}
