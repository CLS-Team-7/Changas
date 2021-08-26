import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import validateForm from './Validaciones'
import { getAllCategory, getAllSpecialty, sendPost, getAllLocations } from '../../../Redux/actions';
import Select from "react-select";


function CreatePostUserComp() {
  const { push } = useHistory()
  const dispatch = useDispatch();
  //ESTO ES PARA LA DEMO//
  const user = useSelector(state => state.userLogin)
  const category = useSelector(state => state.categoryPost)


  const [errors, setErrors] = useState({})

  const locations = useSelector(state => state.allLocations)


  useEffect(() => {

    dispatch(getAllCategory())
    dispatch(getAllSpecialty())
    dispatch(getAllLocations())
  }, [dispatch])

  const optionPay = [
    { value: "A convenir", label: "A convenir" },
    { value: "Efectivo", label: "Efectivo" },
    { value: "Mercado Pago", label: "Mercado Pago" },
    { value: "Transferencia", label: "Transferencia" },
  ];

  const optionTime = [
    { value: "Mañana", label: "Mañana" },
    { value: "Tarde", label: "Tarde" },
    { value: "Noche", label: "Noche" },
  ];



  const [specialtyBeta, setSpecialtyBeta] = useState([])
  const [postInput, setPostInput] = useState({
    user_id: user?.id,
    typePost: "",
    title: "",
    description: "",
    image: "",
    timeRange: [],
    priceRange: [],
    category_id: "",
    specialty_id: "",
    paymentMethods: [],
    workingArea: [],
    location_id: null
  })


  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'nel6uilj')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/changas/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
    setPostInput(values => ({
      ...values,
      image: file.secure_url
    }))
  }

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

    return errors;
  }


  function handleChangeArray(e) {
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
      postInput.location_id === null ||
      postInput.paymentMethods === [] ||
      postInput.priceRange === [] ||
      postInput.specialty_id === "" ||
      postInput.timeRange === [] ||
      postInput.title === "" ||
      postInput.typePost === ""
    ) {
      alert("Tienes que llenar todos los campos...");
    } else {
      dispatch(sendPost(postInput));
      push("/user/posts");
    }
  };

  function handleSelectChangePay(value) {
    let selectedItems = Array.from(value, (opt) => opt.value);
    const newInput = {
      ...postInput,
      paymentMethods: selectedItems,
    };
    setErrors(validate(newInput));
    setPostInput(newInput);
  }
  function handleSelectChangeTime(value) {
    let selectedItems = Array.from(value, (opt) => opt.value);
    const newInput = {
      ...postInput,
      timeRange: selectedItems,
    };
    setErrors(validate(newInput));
    setPostInput(newInput);
  }


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
                    <select
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
                      className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                    <Select
                      id="payment"
                      name="paymentMethods"
                      isMulti
                      options={optionPay}
                      menuPortalTarget={document.body}
                      className="w-40 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:border-yellow-500 "
                      onChange={(value) => handleSelectChangePay(value)}
                      placeholder="Metodo de ..."
                      theme={(theme) => ({
                        ...theme,
                        borderColor: "7C3AED",
                        position: "absolute",
                        colors: {
                          ...theme.colors,
                          primary25: "lightGray",
                          primary: "#7C3AED",
                        },
                      })}
                    />
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
                    <Select
                      id="timeRange"
                      name="timeRange"
                      isMulti
                      options={optionTime}
                      className="w-40 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      onChange={(value) => handleSelectChangeTime(value)}
                      placeholder="Horario..."
                      menuPortalTarget={document.body}
                      theme={(theme) => ({
                        ...theme,
                        borderColor: "7C3AED",
                        colors: {
                          ...theme.colors,
                          primary25: "lightGray",
                          primary: "#7C3AED",
                          position: "relative",
                        },
                      })}
                    />
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
                        Elegir una categoría
                      </label>
                    </div>
                  )}
                </div>
                <div>

                  <input
                    type="file"
                    name="file"
                    placeholder="Upload an image"
                    onChange={uploadImage} />
                  {loading ? (<h3>Loading...</h3>) : (<img src={image} style={{ width: '100px' }} alt="" />)}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center  md:gap-8 gap-4  ">
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

export default CreatePostUserComp
