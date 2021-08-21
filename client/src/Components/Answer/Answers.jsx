import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Answer from './Answer';
import { getSinglePost } from '../../Redux/actions/index';
//import { useAuth0 } from "@auth0/auth0-react";


export default function Answers() {
    //const { isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    let { id } = useParams();
    const userLogin = useSelector(state => state.userLogin);
    const singlePost = useSelector(state => state.singlePost);
    let questions = singlePost.questions;
    let validatedQuestions = questions?.filter(question => question.user_id !== userLogin.id);
    let answers = [];
    // console.log("reviews", reviews);
    // console.log("validated", validatedReviews);
    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [dispatch, id])


    validatedQuestions ? console.log(Object.keys(validatedQuestions[0].answers)) : console.log("tu vieja puta")



    return (
        <div className="pt-4 flex flex-col self-center place-content-center">
            {<div className="flex self-center w-3/4">
                {!validatedQuestions?.length ? null
                    : questions.map(q => {
                        return (
                            <div key={q.question}>
                                <Answer
                                    question={q.question}
                                    given_name={q.user.given_name}
                                    createdAt={q.createdAt}
                                />
                                {/*<div>
                                    {isAuthenticated ?
                                        <Link to={`/report`} className="flex pt-4 ml-auto"><button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Reportar</button></Link>
                                        : null}
                                </div>*/}
                            </div>)
                    })

                }

            </div>}

        </div>
    )
}