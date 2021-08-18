import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Review from './Review';
import { getSinglePost } from '../../Redux/actions/index';


export default function Reviews() {
    const dispatch = useDispatch();
    let { id } = useParams();
    const singlePost = useSelector(state => state.singlePost);
    let reviews = singlePost.reviews;

    useEffect(() => {
        dispatch(getSinglePost(id))
    }, [dispatch, id])



    return (
        <div>
            <h2 className="font-bold text-xl mb-2 ml-14 flex justify-start"> Comentarios </h2>
            <div>{!reviews?.length ? 'Este posteo no tiene comentarios'
                : reviews.map(review => <Review
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