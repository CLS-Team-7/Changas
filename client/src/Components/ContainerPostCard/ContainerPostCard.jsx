import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination'
import PostComp from './PostComp';

function ContainerPostCard() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(1);
    const postsPerPage = 12;

    const filterType = useSelector(state => state.filterType)
    const postList = useSelector(state => state.postList)

    useEffect(() => {
        setPosts(postList)
    }, [postList])

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])


    //Pagination
    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentPost(pageNumber);
    }

    let filteredPosts = [];

    if(filterType === 'All'){
        filteredPosts = posts;
    } else{
        filteredPosts = posts.filter(post => post.category.title === filterType);
    }


    const indexOfLastPost = currentPost * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);




    return (
        <div className="container px-5 py-24 m-auto ">
            <div>
                <PostComp posts={currentPosts} />
            </div>
            <div className="flex justify-center my-14">
                <Pagination ctsPerPage={postsPerPage} totalCts={filteredPosts.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default ContainerPostCard
