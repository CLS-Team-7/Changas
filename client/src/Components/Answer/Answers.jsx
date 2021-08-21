import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Answer from './Answer';
import { getSinglePost } from '../../Redux/actions/index';
//import { useAuth0 } from "@auth0/auth0-react";


export default function Answers({ id_question }) {
    //const { isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    let { id } = useParams();
    const userLogin = useSelector(state => state.userLogin);
    const singlePost = useSelector(state => state.singlePost);
    let questions = singlePost.questions;
    let validatedQuestions = questions?.filter(question => question.user_id !== userLogin.id); // se va a volver innecesario el filtro porque un mismo usuario no va a poder hacerse preguntas isAuthenticated (ver DetailComponent.jsx)
    let onlyAnswers = [];
    let questionAnswers = [];

    // console.log("reviews", reviews);
    // console.log("validated", validatedReviews);
    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [dispatch, id])


    //validatedQuestions ? console.log(validatedQuestions) : console.log("tu vieja puta")

    validatedQuestions?.forEach(q => q.answers?.forEach(ans => onlyAnswers.push(ans)))
    // onlyAnswers ? console.log(onlyAnswers) : console.log('niet')

    questionAnswers = onlyAnswers?.filter(ans => ans.question.id === id_question)
    // console.log(questionAnswers)

    return (
        <ul className="pt-4 flex flex-row">
            {<ul className="flex flex-row">
                {!questionAnswers?.length ? null
                    : questionAnswers.map(ans => {
                        return (
                            <li key={ans.id}>
                                <Answer
                                    answer={ans.answer}
                                    createdAt={ans.createdAt}
                                />
                                {/*<div>
                                    {isAuthenticated ?
                                        <Link to={`/report`} className="flex pt-4 ml-auto"><button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Reportar</button></Link>
                                        : null}
                                </div>*/}
                            </li>)
                    })

                }

            </ul>}

        </ul>
    )
}