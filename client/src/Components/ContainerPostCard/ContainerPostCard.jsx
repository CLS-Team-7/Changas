import React, { useState, useEffect } from 'react';
import { getAllPosts, getJobOffers, getJobPetitions } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import PostComp from './PostComp';

function ContainerPostCard() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(1);
    const postsPerPage = 12;

    const filterType = useSelector(state => state.filterType)
    const postList = useSelector(state => state.postList)
    const offers = useSelector(state => state.offerPost)
    const petition = useSelector(state => state.petitionPost)
    const premium = postList?.filter(e => e.isPremium)

    useEffect(() => {
        setPosts(postList)
    }, [postList])

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    useEffect(() => {
        dispatch(getJobOffers())
        dispatch(getJobPetitions())
    }, [dispatch])


    //Pagination

    let filteredPosts = [];

    if (filterType === 'All') {
        filteredPosts = posts;
    } else {
        filteredPosts = posts.filter(post => post.category.title === filterType);
    }


    const indexOfLastPost = currentPost * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);




    return (
        <div className="container px-5 py-24 m-auto ">
            <div>
                <PostComp posts={currentPosts} offers={offers} petition={petition} premium={premium} />
            </div>
            <div className="flex justify-center my-14">
            </div>
        </div>
    )
}

export default ContainerPostCard
