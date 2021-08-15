import React ,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllReviews } from '../../Redux/actions';
import Review from './Review';


export default function Reviews () {
    const allReview = useSelector(state => state.allReview);

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getAllReviews())
    } ,[dispatch])

    console.log(allReview)
    return (
        <div>
            <h2>{allReview.length ? 'Comentarios': 'Sin comentarios'}</h2>
                    {/* x es cada review del producto traido de back */}
                    { allReview.map( x => <Review
                    rating={x.rating}
                    description={x.description}
                    fullName={x.user.fullName}
                    updatedAt={x.updatedAt}
                    />
                ) }
        </div>
    )
}