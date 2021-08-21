import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Answers from "../Answer/Answers";


function Question({ createdAt, question, given_name, id_question }) {
    const { isAuthenticated } = useAuth0();


    return (
        <div>

            <div className="flex bg-white p-6  rounded-lg shadow-lg ml-6 border-2 mt-3 w-11/12">
                <div className="ml-6 ">
                    <p className="flex items-baseline">
                        <span className="text-gray-600 font-bold">{given_name}</span>
                        <span className="ml-2 text-green-600 text-xs">Usuario Registrado</span>
                    </p>
                    <span className="flex items-center ml-2 text-black-600 text-xs">{createdAt}</span>
                    <div className="flex items-center mt-4 text-gray-600">
                        <div className="flex items-center">
                            <i className='commentsIcons'></i>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="mt-1 text-justify" >"{question}"</p>
                    </div>
                    <div className="flex items-center ml-2">
                        <div>
                            {isAuthenticated ?
                                <Link to={`/report`} className="flex pt-4 ml-auto"><button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Reportar</button></Link>
                                : null}
                        </div>
                    </div>

                    <div className="mt-3">
                        <Answers id_question={id_question} />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Question;