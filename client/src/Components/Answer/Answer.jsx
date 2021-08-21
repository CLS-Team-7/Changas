import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";


function Answer({ createdAt, answer }) {
    const { isAuthenticated } = useAuth0();


    return (
        <div className="flex bg-white ">
            <div className="">
                <span className="flex items-center ml-2 text-black-600 text-xs">Respuesta</span>
                <span className="flex items-center ml-2 text-black-600 text-xs">{createdAt}</span>

                <div className="mt-3">
                    <p className="mt-1 text-justify" >"{answer}"</p>
                </div>
                <div className="flex items-center ml-2">
                    <div>
                        {isAuthenticated ?
                            <Link to={`/report`} className="flex pt-4 ml-auto"><button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Reportar</button></Link>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Answer;