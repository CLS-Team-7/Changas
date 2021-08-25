import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  getAllCategory,
  getAllSpecialty,
  sendPost,
  getAllLocations,
} from "../../../Redux/actions";
import Select from "react-select";

function CreatePostUserComp() {
  const { push } = useHistory();
  const dispatch = useDispatch();
  //ESTO ES PARA LA DEMO//
  const user = useSelector((state) => state.userLogin);
  const category = useSelector((state) => state.categoryPost);
  const locations = useSelector((state) => state.allLocations);

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllSpecialty());
    dispatch(getAllLocations());
  }, [dispatch]);

  const optionsLocation = locations.map((location) => {
    return {
      value: location.id,
      name: location.name,
      label: location.name,
      key: location.id,
    };
  });

  const [specialtyBeta, setSpecialtyBeta] = useState([]);
  const [errors, setErrors] = useState({});
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
    workingArea: [],
    location_id: null,
  });

  console.log(postInput);

  function validate(postInput) {
    /* TITLE */
    if (!postInput.title) {
      errors.title = "Debes completar este campo...";
    } else if (postInput.title.length > 50) {
      errors.title = "Maximo 50 caracteres...";
    } else {
      errors.title = "";
    }

    /* DESCRIPTION */
    if (!postInput.description) {
      errors.description = "Debes completar este campo...";
    } else if (postInput.description.length > 250) {
      errors.description = "Maximo 250 caracteres...";
    } else {
      errors.description = "";
    }

    /* TYPEPOST */
    postInput.typePost === "Elegir"
      ? (errors.typePost = "Debes seleccionar una opción...")
      : (errors.typePost = "");

    /* LOCATION */
    postInput.location_id === ""
      ? (errors.location_id = "Debes seleccionar una opción...")
      : (errors.location_id = "");

    /* PRECIO BASE */
    if (postInput.priceRange[0] === "") {
      errors.priceRange = "Debes seleccionar una opción...";
    } else {
      errors.priceRange = "";
    }

    /* METODO DE PAGO */
    if (postInput.paymentMethods[0] === "Elegir") {
      errors.paymentMethods = "Debes seleccionar una opción...";
    } else {
      errors.paymentMethods = "";
    }

    /* HORARIO */
    if (postInput.timeRange[0] === "Elegir") {
      errors.timeRange = "Debes seleccionar una opción...";
    } else {
      errors.timeRange = "";
    }

    /* CATEGORIA */
    if (postInput.category_id === "") {
      errors.category_id = "Debes seleccionar una opción...";
    } else {
      errors.category_id = "";
    }

    return errors;
  }

  console.log(errors);

  async function specialtyCategory() {
    if (postInput.category_id.length !== 0) {
      const result = category.find(
        (e) => e.id.toString() === postInput.category_id
      );
      const specialtys = result?.specialties?.map((e) => {
        return { title: e.title, id: e.id };
      });
      setSpecialtyBeta(specialtys);
    }
  }

  function handleChange(e) {
    // setPostInput((values) => ({
    //   ...values,
    //   [e.target.name]: e.target.value,
    // }));

    const newInput = {
      ...postInput,
      [e.target.name]: e.target.value,
    };
    setErrors(validate(newInput));
    setPostInput(newInput);
  }

  const handleClickCategory = () => {
    if (postInput.category_id !== "Elegir") {
      specialtyCategory();
    }
  };

  function handleChangeArray(e) {
    // setPostInput((values) => ({
    //   ...values,
    //   [e.target.name]: [e.target.value],
    // }));

    const newInput = {
      ...postInput,
      [e.target.name]: [e.target.value],
    };
    setErrors(validate(newInput));
    setPostInput(newInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      postInput.category_id === "" ||
      postInput.description === "" ||
      postInput.title === "" ||
      postInput.location_id === null ||
      postInput.location_id === ""
    ) {
      alert("Tienes que llenar todos los campos...");
    } else {
      dispatch(sendPost(postInput));
      push("/user/posts");
    }
  };
  return (
    <div>
      {user?.isDataComplete ? (
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex bg-white items-center justify-center md:mt-20 md:mb-36 sm:mt-72 sm:mb-96">
              <div className="grid bg-gray-300 rounded-lg shadow-2xl overflow-hidden w-11/12 md:w-9/12 lg:w-1/2 ">
                <div className="flex justify-center py-4"></div>

                <div className="flex justify-center">
                  <div className="flex">
                    <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
                      Nueva Publicación
                    </h1>
                  </div>
                </div>
                <p className="m-4 md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Completá todos los datos necesarios para hacer tu publicación.
                </p>
                <p className="m-2 md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Verificá todos los datos antes de enviarlos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
                  <div className="grid grid-cols-1 mt-1 mx-10">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Tipo de anuncio
                    </label>
                    {errors.typePost && (
                      <div className='text-red-700 font-bold text-xs pt-3 relative" role="alert"'>
                        {errors.typePost}
                      </div>
                    )}
                    <select
                      onBlur={handleChange}
                      onChange={handleChange}
                      name="typePost"
                      className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option disabled selected>
                        Elegir
                      </option>
                      <option value="Petition">Solicitar Servicio</option>
                      <option value="Offer">Ofrecer Servicio</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Título
                  </label>
                  {errors.title && (
                    <div className='text-red-700 font-bold text-xs pt-3 relative" role="alert"'>
                      {errors.title}
                    </div>
                  )}
                  <input
                    onBlur={handleChange}
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="text"
                    placeholder="Título del anuncio..."
                    onChange={handleChange}
                    name="title"
                    autoComplete="off"
                  />
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Descripción
                  </label>
                  {errors.description && (
                    <div className='text-red-700 font-bold text-xs pt-3 relative" role="alert"'>
                      {errors.description}
                    </div>
                  )}
                  <textarea
                    onBlur={handleChange}
                    className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    type="textarea"
                    placeholder="Breve descripción sobre el anuncio..."
                    onChange={handleChange}
                    name="description"
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                  <div className="grid grid-cols-1">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Zona / Área de trabajo
                    </label>
                    {errors.location_id && (
                      <div className='text-red-700 font-bold text-xs pt-3 relative" role="alert"'>
                        {errors.location_id}
                      </div>
                    )}
                    {/* <Select
                    onChange={handleChange}
                      id="location_id"
                      name="location_id"
                      options={optionsLocation}
                      className="basic-multi-select"
        
                    /> */}
                    <select
                      multiple
                      className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      onChange={handleChange}
                      onClick={handleClickCategory}
                      onBlur={handleChange}
                      name="location_id"
                    >
                      <option value="Null" disabled selected>
                        Elegir
                      </option>
                      {locations?.length !== 0 ? (
                        locations?.map((e) => {
                          return (
                            <option value={e.id} key={e.id}>
                              {e.name}
                            </option>
                          );
                        })
                      ) : (
                        <option>Cargando...</option>
                      )}
                    </select>
                  </div>
                  <div className="grid grid-cols-1">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Precio Base / "A Convenir"
                    </label>
                    {errors.priceRange && (
                      <div className='text-red-700 font-bold text-xs pt-3 relative" role="alert"'>
                        {errors.priceRange}
                      </div>
                    )}
                    <input
                      className=" px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      type="text"
                      placeholder="Ingrese un precio..."
                      name="priceRange"
                      onChange={handleChangeArray}
                      onBlur={handleChangeArray}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Métodos de pago
                    </label>
                    {errors.paymentMethods && (
                      <div className='text-red-700 font-bold text-xs pt-3 relative" role="alert"'>
                        {errors.paymentMethods}
                      </div>
                    )}
                    <select
                      className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="paymentMethods"
                      onChange={handleChangeArray}
                      onBlur={handleChangeArray}
                    >
                      <option disabled selected>
                        Elegir
                      </option>
                      <option value="A convenir">A convenir</option>
                      <option value="Mercado Pago">Mercado Pago</option>
                      <option value="Efectivo">Efectivo</option>
                      <option value="Transferencia">Transferencia</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Horarios
                    </label>
                    {errors.timeRange && (
                      <div className='text-red-700 font-bold text-xs pt-3 relative" role="alert"'>
                        {errors.timeRange}
                      </div>
                    )}
                    <select
                      className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="timeRange"
                      onChange={handleChangeArray}
                      onBlur={handleChangeArray}
                    >
                      <option disabled selected>
                        Elegir
                      </option>
                      <option value="Noche">A convenir</option>
                      <option value="Mañana">Mañana</option>
                      <option value="Tarde">Tarde</option>
                      <option value="Noche">Noche</option>
                      <option value="Mañana y tarde">Mañana y tarde</option>
                      <option value="Tarde y noche">Tarde y noche</option>
                    </select>
                  </div>
                </div>

                <div className="m-5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Categoria
                    </label>
                    {errors.category_id && (
                      <div className='text-red-700 font-bold text-xs pt-3 relative" role="alert"'>
                        {errors.category_id}
                      </div>
                    )}
                    {
                      <select
                        required
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        onChange={handleChange}
                        onClick={handleClickCategory}
                        name="category_id"
                      >
                        <option value="Null" disabled selected>
                          Elegir
                        </option>
                        {category.length !== 0 ? (
                          category.map((e) => {
                            return (
                              <option value={e.id} key={e.id}>
                                {e.title}
                              </option>
                            );
                          })
                        ) : (
                          <option>Cargando...</option>
                        )}
                      </select>
                    }
                  </div>

                  {specialtyBeta.length !== 0 ? (
                    <div className="grid grid-cols-1 mt-5 mx-7">
                      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        Especialidad
                      </label>
                      <select
                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        onChange={handleChange}
                        name="specialty_id"
                      >
                        <option value="Null" disabled selected>
                          Elegir
                        </option>
                        {specialtyBeta.map((e) => {
                          return (
                            <option value={e.id} key={e.id}>
                              {e.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 mt-5 mx-7">
                      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                        Especialidad
                      </label>
                      <label className="md:text-sm text-xs text-gray-500 text-light font-semibold">
                        Eligir una categoría
                      </label>
                    </div>
                  )}
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
              </div>
            </div>
            <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
              <Link to="/home">
                <button className="w-auto bg-gray-500 hover:bg-red-600 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                  Cancelar
                </button>
              </Link>
              <button
                type="submit"
                className="w-auto bg-purple-500 hover:bg-green-600 rounded-lg shadow-xl font-medium text-white px-4 py-2"
              >
                Crear
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
          <p className="mt-10 md:text-sm text-xs text-gray-600 text-light font-semibold">
            Oops! Todavía no completaste tus datos!
          </p>
          <div>
            <Link to="/user/config">
              <button className="w-auto bg-red-500 hover:bg-green-500 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                Completar Datos
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePostUserComp;
