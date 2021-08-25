import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Answer from './Answer';
import { getSinglePost } from '../../Redux/actions/index';



export default function Answers({ id_question }) {

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
        <ul className=" flex flex-col">
            {<ul className="">
                {!questionAnswers?.length ? null
                    : questionAnswers.map(ans => {
                        return (
                            <li key={ans.id}>
                                <Answer
                                    id_answer={ans.id}
                                    answer={ans.answer}
                                    createdAt={ans.createdAt}
                                />

                            </li>)
                    })

                }

            </ul>}

        </ul>
    )
}