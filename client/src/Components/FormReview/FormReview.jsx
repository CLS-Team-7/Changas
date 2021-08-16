export default function AddFormReview(props) {
  return (
    <div className="flex flex-col my-auto items-center  bg-cover">
      <form className="content-center	w-1/2  border border-gray-800 bg-gray-200 border my-10	">
        <h1 className="text-2xl antialiased font-medium	">
          Deja una reseña para este servicio
        </h1>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-gray border w-full text-black mr-3 ml-3 py-2 px-5"
            type="text"
            placeholder="Escribe tu reseña aquí"
            aria-label="Full name"
          />
          <select className="w-50  border  hover:border-gray-500 px-4 py-2 pr-8 rounded  ">
            <option>Estrellas</option>
            <option>1 *</option>
            <option>2 * *</option>
            <option>3 * * *</option>
            <option>4 * * * *</option>
            <option>5 * * * * *</option>
          </select>
          <button className="bg-white hover:bg-gray-800 m-4 hover:text-white border border-blue-500 text-gray-800 font-bold py-2 px-4 rounded">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
