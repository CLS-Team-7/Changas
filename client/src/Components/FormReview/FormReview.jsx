import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postReview } from "../../Redux/actions";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function AddFormReview(props) {
  /// chequear tambien que el mismo usuario no se haga preguntas a si mismo, ternario en el boton enviar

  const dispatch = useDispatch();
  const { push } = useHistory();

  //const user = useSelector(state => state.userAdmin);
  //const post = useSelector(state => state.postList);
  const singlePost = useSelector((state) => state.singlePost);
  const userLogin = useSelector((state) => state.userLogin);

  const [postInput, setPostInput] = useState({
    user_id: userLogin.id,
    post_id: singlePost.id,
    rating: null,
    description: "",
  });
  // useEffect(() => {
  //   dispatch(getUserAdmin())
  //   dispatch(getAllPosts())
  // }, [dispatch])
  function handleChange(e) {
    setPostInput((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postReview(postInput));
    alert("¡Tu reseña fue enviada! El dueño de la publicación fue notificado.");
    push(`/posts/${singlePost.id}`); //OJO, antes de que se muestr el review, el dueño del posteo tiene que VALIDARLO
  };

  return (
    <div>
      <Header />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="min-h-screen bg-gradient-to-b from-Medium__Champagne py-6 flex flex-col justify-center py-12">
          <div className="p-3 max-w-md mx-auto ">
            <div className="bg-white min-w-2xl flex flex-col rounded-lg shadow-lg">
              <div className="px-12 py-5">
                <h2 className="text-gray-800 text-3xl font-semibold">
                  ¡Gracias por dejar tu opinión!
                </h2>
              </div>
              <div className="bg-gray-800 w-full flex flex-col items-center p-8 rounded-b-lg">
                <div className="flex flex-col items-center py-6 space-y-3">
                  <div className="grid grid-cols-1">
                    <p className=" m-2 md:text-sm text-xs text-white text-light font-semibold text-center">
                      Tu opinión nos importa porque ayuda a la comunidad de
                      CHANGAS a encontrar servicios y trabajadores de excelencia
                    </p>
                    <p className=" m-2 md:text-sm text-xs text-gray-200 text-light font-semibold">
                      ¡Con tu reseña estás ayudando al dueño de la publicación a
                      encontrar más clientes!
                    </p>
                  </div>
                  <div className="grid grid-cols-1 w-11/12 md:w-9/12 ">
                    <label className="uppercase md:text-sm text-xs text-gray-200 text-light font-semibold">
                      - Publicación -
                    </label>
                    <input
                      name="post_id"
                      disabled
                      value={singlePost.title}
                      className=" text-center text-gray-200 py-2 px-3 rounded-lg border-2 border-yellow-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <select
                    onChange={handleChange}
                    name="rating"
                    className="w-11/12 md:w-9/12 border hover:border-gray-500 px-4 py-2 pr-8 rounded  "
                  >
                    <option disabled selected>
                      ¿Cómo calificarías tu experiencia?
                    </option>
                    <option type="number" value="1">
                      1 ⭐
                    </option>
                    <option type="number" value="2">
                      2 ⭐⭐
                    </option>
                    <option type="number" value="3">
                      3 ⭐⭐⭐
                    </option>
                    <option type="number" value="4">
                      4 ⭐⭐⭐⭐
                    </option>
                    <option type="number" value="5">
                      5 ⭐⭐⭐⭐⭐
                    </option>
                  </select>
                </div>
                <div className="w-11/12 md:w-9/12  flex flex-col">
                  <textarea
                    rows="3"
                    name="description"
                    className="p-4 text-gray-500 rounded-xl resize-none"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Contános tu experiencia "
                  />
                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    className="py-3 my-8 text-lg rounded-xl text-white  bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
