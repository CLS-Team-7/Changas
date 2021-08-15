export default function AddFormReview(props) {
  return (
    <div className="flex flex-col h-screen my-auto items-center  bg-cover">
      <form className="content-center	w-2/4  border border-gray-800 bg-gray-200 border my-10	">
        <h1 className="text-2xl antialiased font-medium	">Deja una reseña para este servicio</h1>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-gray border w-full text-black mr-3 ml-3 py-2 px-5"
            type="text"
            placeholder="Escribe tu reseña aquí"
            aria-label="Full name"
          />
          <select className="w-50  border  hover:border-gray-500 px-4 py-2 pr-8 rounded  ">
            <option>Rating</option>
            <option>*</option>
            <option>* *</option>
            <option>* * *</option>
            <option>* * * *</option>
            <option>* * * * *</option>
          </select>
          <button className="bg-white hover:bg-gray-800 hover:text-white border text-gray-800 font-bold py-2 px-4 rounded">
            Enviar
          </button>
          <button
            className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-3 border border-blue-500 hover:border-transparent rounded"
            type="button"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}
