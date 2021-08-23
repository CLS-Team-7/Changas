import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Answers from "../Answer/Answers";


function Question({ createdAt, question, given_name, id_question }) {
    const { isAuthenticated } = useAuth0();

    // hola
    return (
        <div>

            <div className=" bg-white p-6  rounded-lg shadow-lg ml-6 border-2 mt-3 w-11/12">
                <div className="flex flex-col ml-6">
                    <p className="flex items-baseline">
                        <span className="text-gray-600 font-bold">{given_name}</span>
                        <span className="ml-2 text-green-600 text-xs">Usuario Registrado</span>
                        <span className="flex ml-auto">
                            {isAuthenticated ?
                                <Link to={`/report`} className="flex pt-4"><span className="flex ml-auto text-gray  border-0  focus:outline-none hover:text-red-600 rounded text-xs">Reportar</span></Link>
                                : null}
                        </span>
                    </p>
                    <span className="flex items-center ml-2 text-black-600 text-xs">{createdAt}</span>

                    <p className="mt-2 mb-2 ml-2 text-justify" >"{question}"</p>
                    <hr style={{ color: "black" }} />
                    <div className="mt-3">
                        <Answers id_question={id_question} />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Question;