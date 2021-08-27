import React from 'react';

import { Link } from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';



export default function Answers({ id_question, answer }) {
    const { isAuthenticated } = useAuth0();

    console.log(answer)

    return (
        <ul className=" flex flex-col">
            {<ul className="">
                {!answer?.length ? null
                    : answer.map(ans => {
                        return (
                            <li key={answer?.indexOf()}>
                                <div className=" bg-white ">
                                    <div className="flex flex-col">
                                        <p className="flex items-baseline">
                                            <span className="flex items-center text-black-600 text-xs"><b>Respuesta</b></span>
                                            <span className="flex items-center ml-2 text-black-600 text-xs">{ans?.createdAt.slice(0, 10)}</span>
                                            <span className="flex ml-auto">
                                                {isAuthenticated ?
                                                    <Link to={`/report/answer/${ans?.id_answer}`} className="flex pt-4"><span className="flex ml-auto text-gray  border-0 focus:outline-none hover:text-red-600 rounded text-xs">Reportar</span></Link>
                                                    : null}
                                            </span>
                                        </p>
                                        <div className="mt-3">
                                            <p className="mt-1 ml-2 text-justify" >"{ans?.answer}"</p>
                                        </div>
                                    </div>
                                </div >

                            </li>)
                    })

                }

            </ul>}

        </ul>
    )
}