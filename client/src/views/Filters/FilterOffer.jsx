import React, { useState, useEffect } from 'react';
import { getJobOffers } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../../Components/Pagination/Pagination'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header'
import FilterComp from '../../Components/FilterComponent/FilterComp';
import FilterCategoryBottom from '../../Components/FilterButton/FilterCategoryBottom/FilterCategoryBottom';
import SelectServiceFilter from '../../Components/FilterButton/SelectServiceFilter';

function FilterOffer() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(1);
    const postsPerPage = 12;

    const postList = useSelector(state => state.offerPost)
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

    if (filterType === 'All') {
        filteredPosts = posts;
    } else {
        filteredPosts = posts.filter(post => post.category.title === filterType);
    }


    const indexOfLastPost = currentPost * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);


    return (
        <div>
            <Header />
            <div className="container px-5 py-24 m-auto ">
                <div className="flex justify-between sm:flex-row flex-col">
                    <h1 className="title-font  text-start text-gray-900 mb-3 font-extrabold text-5xl mb-8 text-left">Ofertas de trabajo</h1>
                    <div className="flex sm:flex-row flex-col">
                        <SelectServiceFilter />
                        <div className="ml-2">

                            <FilterCategoryBottom />
                        </div>
                    </div>
                </div>
                <FilterComp posts={currentPosts} />
                <div className="flex justify-center my-14">
                    <Pagination ctsPerPage={postsPerPage} totalCts={filteredPosts.length} paginate={paginate} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FilterOffer