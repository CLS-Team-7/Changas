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
        <div className="flex flex-col self-center place-content-center">
            <h2 className="font-bold text-xl mt-6 mb-2 ">Preguntas de otros usuarios</h2>
            {<div className="flex self-center flex-wrap mb-12">
                {!validatedQuestions?.length ? <div className='flex mt-3 mb-3'>Esta publicación no tiene preguntas</div>
                    : questions.map(q => {
                        return (
                            <div className='w-full' key={q.question}>
                                <Question
                                    id_question={q.id}
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