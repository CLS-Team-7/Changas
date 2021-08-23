import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  getAllCategory,
  getAllSpecialty,
  sendPost,
} from "../../../Redux/actions";
import validateForm from "./Validaciones";

import { Formik, Field, Form, FieldArray } from "formik";

function CreatePostUserCompCopy() {
  const { push } = useHistory();
  const dispatch = useDispatch();
  //ESTO ES PARA LA DEMO//
  const user = useSelector((state) => state.userLogin);
  const category = useSelector((state) => state.categoryPost);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllSpecialty());
  }, [dispatch]);

  /* console.log(category) */
  /* console.log(specialty) */
  const [specialtyBeta, setSpecialtyBeta] = useState([]);

  //   async function specialtyCategory() {
  //     if (postInput.category_id.length !== 0) {
  //       const result = category.find(
  //         (e) => e.id.toString() === postInput.category_id
  //       );
  //       const specialtys = result.specialties.map((e) => {
  //         return { title: e.title, id: e.id };
  //       });
  //       setSpecialtyBeta(specialtys);
  //     }
  //   }

  function handleChange(e) {
    setErrors((values) =>
      validateForm({
        ...values,
        [e.target.name]: e.target.value,
      })
    );
  }

  //   const handleClickCategory = () => {
  //     specialtyCategory();
  //   };

  //   function handleChangeArray(e) {
  //     setPostInput((values) => ({
  //       ...values,
  //       [e.target.name]: [e.target.value],
  //     }));
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();

    push("/user/posts");
  };
  return (
    <div>
      <Formik
        initialValues={{
          user_id: user?.id,
          typePost: "",
          title: "",
          description: "",
          image:
            "https://www.ucmq.com/wp-content/uploads/dia-del-trabajador-.jpg",
          timeRange: [],
          priceRange: [],
          category_id: "",
          specialty_id: "",
          paymentMethods: [],
          workingArea: [],
        }}
        onSubmit={async (values, actions) => {
          console.log("Post creado");
          //   push("/user");
          console.log(values);
        }}
      >
        {({ errors, touched, values }) => (
          <div className="">
            <div className="py-6 min-h-screen bg-gray-100 flex items-center">
              <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                <Form>
                  <div className="py-2 p-10 bg-white rounded-xl">
                    {/* ------------------------------------------------------------------------------------------------------------------ */}
                    <label className="mt-3 text-gray-700 font-bold flex justify-center inline-block mb-2">
                      {" "}
                      TIPO DE ANUNCIO
                    </label>
                    <Field as="select" name="typePost">
                      <option value="" disabled>
                        Elegir
                      </option>
                      <option value="Petition">Solicitar Servicio</option>
                      <option value="Offer">Ofrecer Servicio</option>
                    </Field>

                    {/* ------------------------------------------------------------------------------------------------------------------ */}
                    <div>
                      <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                        {" "}
                        TÍTULO
                      </label>
                      {errors.ID_Passport && touched.ID_Passport && (
                        <div className="text-red-500 font-bold">
                          {errors.ID_Passport}
                        </div>
                      )}
                      <Field
                        className="text-center border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                        name="title"
                        validate
                        autoComplete="off"
                        placeholder="Completar aquí..."
                      />
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------ */}

                    <div>
                      <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                        {" "}
                        DESCRIPCIÓN
                      </label>

                      <Field
                        as="textarea"
                        className="text-center border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                        name="description"
                        validate
                        autoComplete="off"
                        placeholder="Completar aquí..."
                      />
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------ */}

                    <div>
                      <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                        {" "}
                        ZONA / ÁREA DE TRABAJO
                      </label>

                      <FieldArray
                        name="workingArea"
                        render={(arrayHelpers) => (
                          <div>
                            {values.workingArea &&
                            values.workingArea.length > 0 ? (
                              values.workingArea.map((Area, index) => (
                                <div key={index}>
                                  <Field name={`workingArea.${index}`} />
                                  <button
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                  >
                                    x
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      arrayHelpers.insert(index, "")
                                    } // insert an empty string at a position
                                  >
                                    +
                                  </button>
                                </div>
                              ))
                            ) : (
                              <button
                                type="button"
                                onClick={() => arrayHelpers.push("")}
                              >
                                {/* show this when user has removed all friends from the list */}
                                Agrega un Area / Zona
                              </button>
                            )}
                          </div>
                        )}
                      />
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------ */}

                    <div>
                      <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                        {" "}
                        PRECIO BASE / "A CONVENIR"
                      </label>

                      <FieldArray
                        name="priceRange"
                        render={(arrayHelpers) => (
                          <div>
                            {values.priceRange &&
                            values.priceRange.length > 0 ? (
                              values.priceRange.map((Area, index) => (
                                <div key={index}>
                                  <Field name={`priceRange.${index}`} />
                                  <button
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                  >
                                    x
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => arrayHelpers.push(index, "")} // insert an empty string at a position
                                  >
                                    +
                                  </button>
                                </div>
                              ))
                            ) : (
                              <button
                                type="button"
                                onClick={() => arrayHelpers.push("")}
                              >
                                {/* show this when user has removed all friends from the list */}
                                Agrega un precio
                              </button>
                            )}
                          </div>
                        )}
                      />
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------ */}

                    <div>
                      <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                        {" "}
                        MÉTODOS DE PAGO
                      </label>
                      <br />

                      <FieldArray
                        as="select"
                        name="paymentMethods"
                        render={(arrayHelpers) => (
                          <select>
                            <option onClick={() => arrayHelpers.push('A convenir')} value="A convenir">A convenir</option>
                            <option onClick={() => arrayHelpers.push('Mercado Pago')} value="Mercado Pago">Mercado Pago</option>
                            <option value="Efectivo">Efectivo</option>
                            <option value="Transferencia">Transferencia</option>
                          </select>
                        )}
                      />
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------ */}

                    <button className="mb-2 w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-green-500 transition duration-300">
                      Enviar
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default CreatePostUserCompCopy;
