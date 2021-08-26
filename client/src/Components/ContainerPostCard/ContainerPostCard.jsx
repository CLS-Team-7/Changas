import React, { useState, useEffect } from 'react';
import { getAllPosts, getJobOffers, getJobPetitions } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import PostComp from './PostComp';

function ContainerPostCard() {
    const dispatch = useDispatch();

    const postList = useSelector(state => state.postList)
    const offers = useSelector(state => state.offerPost)
    const petition = useSelector(state => state.petitionPost)
    const premium = postList?.filter(e => e.isPremium)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    useEffect(() => {
        dispatch(getJobOffers())
        dispatch(getJobPetitions())
    }, [dispatch])


    //Pagination


    return (
        <div className="container px-5 py-24 m-auto ">
            <div >
                <PostComp posts={postList} offers={offers} petition={petition} premium={premium} />
            </div>
            <div className="flex justify-center my-14">
            </div>
        </div>
    )
}

export default ContainerPostCard
