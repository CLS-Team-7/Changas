import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  validateAddress,
  validateAge,
  validateDni,
  validatePhone,
  validateSummary,
} from "./Validaciones";

function UserConfig() {
  const [newInfo, setNewInfo] = useState("")
  console.log(newInfo)
  return (
    <div>
      <Formik
        initialValues={{
          age: "",
          ID_Passport: "",
          address: "",
          phoneNumber: "",
          summary: "",
          isVaccinated: false,
          isComplete: true
        }}
        onSubmit={async (values, actions) => {
          setNewInfo(JSON.stringify(values, null, 2));
          actions.resetForm({
            values: {
              age: '',
              ID_Passport: "",
              address: "",
              phoneNumber: "",
              summary: "",
              isVaccinated: false,
            }
          });
        }}
      >
        {({ errors, touched }) => (
          <div className="">
            <div className="py-6  min-h-screen bg-gray-100 flex items-center">
              <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                <Form>
                  <div className="py-12 p-10 bg-white rounded-xl">
                    <div>
                      <div>
                        <label className=" text-gray-700 font-bold inline-block mb-2">
                          {" "}
                          Edad
                        </label>{" "}
                        {errors.age && touched.age && <div>{errors.age}</div>}
                        <Field
                          className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                          name="age"
                          validate={validateAge}
                          autocomplete="off"
                        />
                      </div>

                      <div>
                        <label className="mt-3 text-gray-700 font-bold inline-block mb-2">
                          {" "}
                          Dni / Pasaporte
                        </label>
                        {errors.ID_Passport && touched.ID_Passport && (
                          <div>{errors.ID_Passport}</div>
                        )}
                        <Field
                          className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                          name="ID_Passport"
                          validate={validateDni}
                          autocomplete="off"
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
                      />
                    </div>
                    <div>
                      <label className="mt-3  text-gray-700 font-bold inline-block mb-2">
                        {" "}
                        Telefono
                      </label>
                      {errors.phoneNumber && touched.phoneNumber && (
                        <div>{errors.phoneNumber}</div>
                      )}
                      <Field
                        className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                        name="phoneNumber"
                        validate={validatePhone}
                        autocomplete="off"
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
                      />
                    </div>

                    <div className="mt-3">
                      <label className=" text-gray-700 font-medium inline-flex items-center mt-3">
                        ¿Te vacunaron de Covid-19?
                        <Field
                          className="form-checkbox  h-5 w-5 text-purple-600 ml-2 text-gray-700"
                          type="checkbox"
                          name="isVaccinated"
                        />
                      </label>
                    </div>

                    <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">
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
  )
};

export default UserConfig;