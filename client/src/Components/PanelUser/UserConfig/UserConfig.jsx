import React from "react";
import { Formik, Field, Form } from "formik";
import {
  validateAddress,
  validateAge,
  validateDni,
  validatePhone,
  validateSummary,
} from "./Validaciones";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserData } from "../../../Redux/actions";
import { useHistory } from "react-router-dom";

function UserConfig() {
  const { push } = useHistory()
  const dispatch = useDispatch()
  const state = useSelector(state => state.userLogin)
  return (
    <>
      {
        state?.isDataComplete ?
          <div>
            <Formik
              initialValues={{
                sub: state.sub,
                age: "",
                address: "",
                phoneNumber: "",
                summary: "",
                isVaccinated: false,
              }}

              onSubmit={async (values, actions) => {
                dispatch(UpdateUserData(values));
                actions.resetForm({
                  values: {
                    sub: state?.sub,
                    age: '',
                    address: "",
                    phoneNumber: "",
                    summary: "",
                    isVaccinated: false,
                  }
                });
                alert("Datos Actualizados")
                push("/user")
              }

              }
            >
              {({ errors, touched }) => (
                <div className="">
                  <div className="py-6 min-h-screen bg-gray-100 flex items-center">
                    <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                      <p className="mt-3 text-gray-700 font-bold inline-block mb-2">ATENCIÓN: Verificá que tus datos sean correctos</p>
                      <Form>
                        <div className="py-2 p-10 bg-white rounded-xl">
                          <div>

                            <div>
                              <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                                {" "}
                                Dni / Pasaporte
                              </label>
                              <p>{state?.ID_Passport}</p>
                            </div>

                            <div>
                              <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                                {" "}
                                Edad
                              </label>{" "}
                              {errors.age && touched.age && <div>{errors.age}</div>}
                              <Field
                                className="text-center border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                                name="age"
                                validate={validateAge}
                                autocomplete="off"
                                placeholder="Completar aquí..."
                              />
                            </div>


                            <label className="mt-3  text-gray-700 font-bold inline-block mb-2">
                              {" "}
                              Dirección
                            </label>
                            {errors.address && touched.address && (
                              <div>{errors.address}</div>
                            )}
                            <Field
                              className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                              name="address"
                              validate={validateAddress}
                              autocomplete="off"
                              placeholder="Completar aquí..."
                            />
                          </div>
                          <div>
                            <label className="mt-3  text-gray-700 font-bold inline-block mb-2">
                              {" "}
                              Teléfono
                            </label>
                            {errors.phoneNumber && touched.phoneNumber && (
                              <div>{errors.phoneNumber}</div>
                            )}
                            <Field
                              className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                              name="phoneNumber"
                              validate={validatePhone}
                              autocomplete="off"
                              placeholder="Completar aquí..."
                            />
                          </div>

                          <div>
                            <label className="mt-3  text-gray-700 font-bold inline-block mb-2">
                              {" "}
                              Descripción
                            </label>
                            {errors.summary && touched.phoneNumber && (
                              <div>{errors.summary}</div>
                            )}
                            <Field
                              className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                              name="summary"
                              validate={validateSummary}
                              autocomplete="off"
                              placeholder="Completar aquí..."
                            />
                          </div>
                          <div>
                            <label className="mt-3  text-gray-700 font-bold inline-block mb-2">
                              {" "}
                              Foto / Imágen
                            </label>
                            {errors.summary && touched.phoneNumber && (
                              <div>{errors.summary}</div>
                            )}
                            <Field
                              className="mt-3 border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                              name="picture"
                              disabled
                              placeholder="En desarrollo antes de la demo final"
                              autocomplete="off"

                            />
                          </div>
                          {
                            state?.isVaccinated ?
                              <div>
                                <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                                  {" "}
                                  Ya estás vacunado
                                </label>
                                <p>{"Vacunado"}</p>
                              </div> :

                              <div className="mt-3">
                                <label className=" text-gray-700 font-medium inline-flex items-center mt-3">
                                  ¿Te vacunaron contra el COVID-19?
                                  <Field
                                    className="form-checkbox  h-5 w-5 text-purple-600 ml-2 text-gray-700"
                                    type="checkbox"
                                    name="isVaccinated"
                                  />
                                </label>
                              </div>
                          }

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
          :
          <div>
            <Formik
              initialValues={{
                sub: state.sub,
                age: "",
                ID_Passport: "",
                address: "",
                phoneNumber: "",
                summary: "",
                isVaccinated: false,
              }}

              onSubmit={async (values, actions) => {
                dispatch(UpdateUserData(values));
                actions.resetForm({
                  values: {
                    sub: state?.sub,
                    age: '',
                    ID_Passport: "",
                    address: "",
                    phoneNumber: "",
                    summary: "",
                    isVaccinated: false,
                  }
                });
                alert("Datos Actualizados")
                push("/user")
              }

              }
            >
              {({ errors, touched }) => (
                <div className="">
                  <div className="py-6  min-h-screen bg-gray-100 flex items-center">
                    <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                      <p className="mt-3 text-gray-700 font-bold inline-block mb-2">ATENCIÓN: Verificá que tus datos sean correctos</p>

                      <Form>
                        <div className="py-2 p-10 bg-white rounded-xl">
                          <div>
                            {
                              state?.isDataComplete ?
                                <div>
                                  <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                                    {" "}
                                    DNI / Pasaporte
                                  </label>
                                  <p>{state?.ID_Passport}</p>
                                </div> :
                                <div>
                                  <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                                    {" "}
                                    DNI / Pasaporte
                                  </label>
                                  {errors.ID_Passport && touched.ID_Passport && (
                                    <div>{errors.ID_Passport}</div>
                                  )}
                                  <Field
                                    className="text-center border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                                    name="ID_Passport"
                                    validate={validateDni}
                                    autocomplete="off"
                                    placeholder="Completar aquí..."
                                  />
                                </div>

                            }
                            <div>
                              <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                                {" "}
                                Edad
                              </label>{" "}
                              {errors.age && touched.age && <div>{errors.age}</div>}
                              <Field
                                className="text-center border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                                name="age"
                                validate={validateAge}
                                autocomplete="off"
                                placeholder="Completar aquí..."
                              />
                            </div>


                            <label className="mt-3  text-gray-700 font-bold inline-block mb-2">
                              {" "}
                              Dirección
                            </label>
                            {errors.address && touched.address && (
                              <div>{errors.address}</div>
                            )}
                            <Field
                              className="text-center border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                              name="address"
                              validate={validateAddress}
                              autocomplete="off"
                              placeholder="Completar aquí..."
                            />
                          </div>
                          <div>
                            <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                              {" "}
                              Teléfono
                            </label>
                            {errors.phoneNumber && touched.phoneNumber && (
                              <div>{errors.phoneNumber}</div>
                            )}
                            <Field
                              className="text-center border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                              name="phoneNumber"
                              validate={validatePhone}
                              autocomplete="off"
                              placeholder="Completar aquí..."
                            />
                          </div>

                          <div>
                            <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                              {" "}
                              Descripción
                            </label>
                            {errors.summary && touched.phoneNumber && (
                              <div>{errors.summary}</div>
                            )}
                            <Field
                              className="text-center border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                              name="summary"
                              validate={validateSummary}
                              autocomplete="off"
                              placeholder="Completar aquí..."
                            />
                          </div>
                          <div>
                            <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                              {" "}
                              Foto / Imágen
                            </label>
                            {errors.summary && touched.phoneNumber && (
                              <div>{errors.summary}</div>
                            )}
                            <Field
                              className="text-center border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                              name="picture"
                              disabled
                              placeholder="En desarrollo antes de la demo final"
                              autocomplete="off"

                            />
                          </div>
                          {
                            state?.isVaccinated ?
                              <div>
                                <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                                  {" "}
                                  Ya estas vacunado
                                </label>
                                <p>{"Vacunado"}</p>
                              </div> :

                              <div className="mt-3">
                                <label className=" text-gray-700 font-medium inline-flex items-center mt-3">
                                  ¿Te vacunaron de Covid-19?
                                  <Field
                                    className="form-checkbox h-5 w-5 text-purple-600 ml-2 text-gray-700"
                                    type="checkbox"
                                    name="isVaccinated"
                                  />
                                </label>
                              </div>
                          }

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
      }
    </>
  )
};

export default UserConfig;