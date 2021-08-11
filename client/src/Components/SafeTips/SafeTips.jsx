import React from "react";

const SafeTips = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-4/5 bg-Gris__Claro h-5/6 p-4 m-0 grid grid-cols-3 grid-rows-4 gap-2">
        <h3 className="text-black font-bold text-sm title-font  flex justify-center items-center">
          Consejos de Seguridad:
        </h3>
        <li className="text-black text-xs">
          En <b>CHANGAS</b> no proponemos contratos laborales de ningún tipo, si
          te dicen lo contrario, te están mintiendo.
        </li>
        <li className="text-black text-xs">
          Antes de coordinar una visita, chequeá los datos del prestador del
          servicio como del sitio al cual tienes que dirigirte.
        </li>
        <li className="text-black text-xs">
          Lee atentamente las recomendaciones de usuario, tanto si sos prestador
          o consumidor de un servicio
        </li>
        <li className="text-black text-xs">
          Nunca reveles tus contraseñas ni claves bancarias. NO compartas estos
          datos con NINGÚN usuario. Si alguien te los pide te solicitamos que
          realices el reporte/denuncia correspondiente.
        </li>
        <li className="text-black text-xs">
          Nadie trabajando para CHANGAS va a pedirte que le envíes información
          sensible como la mencionada en el párrafo anterior.
        </li>
        <li className="text-black text-xs">
          Para contratar un servicio no es obligatorio que realices el pago con
          anticipación, ambas partes podrán coordinar la metodología de pago que
          más les convenga.
        </li>
        <li className="text-black text-xs">
          Sugerimos coordinar por chat los detalles y pormenores de los
          servicios que se vayan a contratar, esto te permitirá contar con
          información escrita y correcta, evitando malos entendidos.
        </li>
        <li className="text-black text-xs row-span-2">
          Es importante que dejes una opinión sobre el usuario, ya que esto nos
          ayuda a crecer como comunidad. Tanto si el resultado fue positivo o
          no, queremos saber si estás satisfecho con el servicio que contrataste
          y con el cliente que te contrató. De esta forma se ayuda a otras
          personas a elegir con mayor confianza y además, el profesional logrará
          multiplicar su cantidad de trabajo.
        </li>
        <li className="text-black text-xs">
          Asegúrate antes de realizar cualquier pago que el presupuesto
          contemple todo lo necesario, inclusive el precio final.
        </li>
        <li className="text-black text-xs">
          Respeta las medidas de prevención para evitar contagios de COVID-19.
        </li>
      </div>
    </div>
  );
};

export default SafeTips;
