import React, { useState, useEffect } from 'react';
import { getJobOffers } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import PostComp from './PostComp';

function ContainerOffer() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);

    const postList = useSelector(state => state.offerPost)

    useEffect(() => {
        setPosts(postList)
    }, [postList])

    useEffect(() => {
        dispatch(getJobOffers())
    }, [dispatch])

    const currentPosts = postList?.slice(0,3);

    return (
        <div className="container px-5 py-24 m-auto ">
            <h2 className="font-bold text-xl m-2"> Ofertas </h2>
            <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-indigo-700">Ver mas
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
            </span>
            <div>
                <PostComp posts={currentPosts} />
            </div>
        </div>
    )
}

export default ContainerOffer