import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Answers from '../Answer/Answers';



export default function Questions({ data }) {
    const { isAuthenticated } = useAuth0();



    return (
        <div className="flex flex-col self-center place-content-center">
            <h2 className="font-bold text-xl mt-6 mb-2 ">Preguntas de otros usuarios</h2>
            {<div className="flex self-center flex-wrap mb-12">
                {!data?.length ? <div className='flex mt-3 mb-3'>Esta publicación no tiene preguntas</div>
                    : data?.map(q => {
                        return (
                            <div className='w-full' key={q.question}>
                                <div className=" bg-white p-6 rounded-lg shadow-lg mx-auto border-2 mt-3 w-11/12">
                                    <div className="flex flex-col p-6">
                                        <p className="flex items-baseline">
                                            <span className="text-gray-600 font-bold">{q.iven_name}</span>
                                            <span className="ml-2 text-green-600 text-xs">Usuario Registrado</span>
                                            <span className="flex ml-auto">
                                                {isAuthenticated ?
                                                    <Link to={`/report/question/${q?.id_question}`} className="flex pt-4"><span className="flex ml-auto text-gray  border-0  focus:outline-none hover:text-red-600 rounded text-xs">Reportar</span></Link>
                                                    : null}
                                            </span>
                                        </p>
                                        <span className="flex items-center ml-2 text-black-600 text-xs">{q?.createdAt.slice(0, 10)}</span>

                                        <p className="mt-2 mb-2 ml-2 text-justify" >"{q?.question}"</p>
                                        <hr style={{ color: "black" }} />
                                        <div className="mt-3">
                                            <Answers answers={q?.answers} />
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </div>}
        </div>
    )
}