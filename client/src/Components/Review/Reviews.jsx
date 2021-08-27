import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Review from './Review';
import { getSinglePost } from '../../Redux/actions/index';


export default function Reviews() {
    const dispatch = useDispatch();
    let { id } = useParams();
    const userLogin = useSelector(state => state.userLogin);
    const singlePost = useSelector(state => state.singlePost);
    let reviews = singlePost.reviews;
    let validatedReviews = reviews?.filter(review => review.isValidated);
    /* console.log("reviews", reviews); */
    // console.log("validated", validatedReviews);

    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [dispatch, id])



    return (
        <div className="flex flex-col self-center place-content-center">
            <h2 className="font-bold text-xl mb-2 "> Reseñas </h2>
            <div className="flex self-center">
                {!validatedReviews?.length ? <div className='flex mt-3 mb-3'>Esta publicación no tiene reseñas</div>
                    : validatedReviews.map(review => {
                        return (
                            <div className='w-full' key={review.description}>
                                <Review
                                    rating={review.rating}
                                    description={review.description}
                                    fullName={review.user.fullName}
                                    createdAt={review.createdAt}
                                />
                            </div>)
                    })
                }
            </div >

        </div>
    )
}