import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../../Redux/actions';
import Pagination from '../../Pagination/Pagination';
import TotalPostComp from './TotalPostComp';

function TotalPost() {
    const postList = useSelector(state => state.postList)
    const dispatch = useDispatch()
    const [Post, setPost] = useState([]);
    const [currentPost, setCurrentPost] = useState(1);
    const userPerPage = 6;

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    useEffect(() => {
        setPost(postList)
    }, [postList])

    const indexOfLastPost = currentPost * userPerPage;
    const indexOfFirstPost = indexOfLastPost - userPerPage;
    const currentPosts = Post.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentPost(pageNumber);
    }
    return (
        <div>
            <div className="flex flex-col">
                <div /* className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-8" */>
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:pl-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <div className="min-w-full divide-y divide-gray-200">
                                <div className="bg-gray-50">
                                </div>
                                <div className="bg-white divide-y divide-gray-200">
                                    <TotalPostComp post={currentPosts} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <Pagination ctsPerPage={userPerPage} totalCts={Post.length} paginate={paginate} />
                </div>
            </div>
        </div>
    )
}

export default TotalPost
