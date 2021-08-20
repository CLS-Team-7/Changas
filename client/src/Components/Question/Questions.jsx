import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Question from './Question';
import { getSinglePost } from '../../Redux/actions/index';


export default function Questions() {
    const dispatch = useDispatch();
    let { id } = useParams();
    const singlePost = useSelector(state => state.singlePost);
    let reviews = singlePost.reviews;
    let validatedReviews = reviews?.filter(review => review.isValidated);
    // console.log("reviews", reviews);
    // console.log("validated", validatedReviews);

    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [dispatch, id])



    return (
        <div className="pt-4 flex flex-col self-center place-content-center">
            <h2 className="font-bold text-xl mb-2 ">Preguntas de otros usuarios</h2>
            <div className="flex self-center w-3/4">
                {!validatedReviews?.length ? <div className='flex'>'Este posteo no tiene preguntas'</div>
                    : validatedReviews.map(review => <Question
                        rating={review.rating}
                        description={review.description}
                        fullName={review.user.fullName}
                        createdAt={review.createdAt}
                    />
                    )}
            </div >

        </div>
    )
}