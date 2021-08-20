import React, { useState, useEffect } from 'react';
import { getJobOffers } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../../Components/Pagination/Pagination'
import PostComp from '../../Components/ContainerPostCard/PostComp';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header'
import FilterButton from '../../Components/FilterButton/FilterButton'

function FilterPetition() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(1);
    const postsPerPage = 12;

    const postList = useSelector(state => state.petitionPost)
    const filterType = useSelector(state => state.filterType)

    useEffect(() => {
        setPosts(postList)
    }, [postList])

    useEffect(() => {
        dispatch(getJobOffers())
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
    <div>
        <Header/>
        <FilterButton/>
        <div className="container px-5 py-24 m-auto ">
            <div>
                <PostComp posts={currentPosts} />
            </div>
            <div className="flex justify-center my-14">
                <Pagination ctsPerPage={postsPerPage} totalCts={filteredPosts.length} paginate={paginate} />
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default FilterPetition