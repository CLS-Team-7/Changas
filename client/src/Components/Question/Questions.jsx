import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Question from './Question';
import { getSinglePost } from '../../Redux/actions/index';


export default function Questions() {
    const dispatch = useDispatch();
    let { id } = useParams();
    const userLogin = useSelector(state => state.userLogin);
    const singlePost = useSelector(state => state.singlePost);
    let questions = singlePost.questions;
    let validatedQuestions = questions?.filter(question => question.user_id !== userLogin.id);
    // console.log("reviews", reviews);
    // console.log("validated", validatedReviews);
    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [dispatch, id])
    //validatedQuestions ? console.log(Object.keys(validatedQuestions[0])) : console.log("tu vieja puta")



    return (
        <div className="pt-4 flex flex-col self-center place-content-center">
            <h2 className="font-bold text-xl mb-2 ">Preguntas de otros usuarios</h2>
            {<div className="flex self-center w-3/4">
                {!validatedQuestions?.length ? <div className='flex'>Esta publicación no tiene preguntas</div>
                    : questions.map(q => {
                        return (
                            <div key={q.question}>
                                <Question
                                    question={q.question}
                                    given_name={q.user.given_name}
                                    createdAt={q.createdAt}
                                />
                            </div>)
                    })

                }
            </div>}

        </div>
    )
}