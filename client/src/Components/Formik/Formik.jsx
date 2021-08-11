import React from 'react';
import { Formik, Field, Form } from 'formik';

const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        age: '',
        ID_Passport: '',
        address: '',
        phone: '',
        summary: '',
        isVaccinated: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="age">Edad</label>
        <Field id="age" name="age" placeholder="Jane" />

        <label htmlFor="ID_Passport">DNI</label>
        <Field id="ID_Passport" name="ID_Passport" placeholder="32.222.222" />

        <label htmlFor="address">Dirección</label>
        <Field id="address" name="address" placeholder="buenos aires" />

        <label htmlFor="phone">Celular</label>
        <Field id="phone" name="phone" placeholder="" />

        <label htmlFor="summary">Descripción</label>
        <Field id="summary" name="summary" placeholder="" />

        <label htmlFor="isVaccinated">Estas vacunado</label>
        <Field id="isVaccinated" name="isVaccinated" placeholder="" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Basic;