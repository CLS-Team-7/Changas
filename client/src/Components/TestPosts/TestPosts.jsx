import React, {useState, useEffect} from 'react';
import { getAllPosts } from '../../Redux/actions';
import { useSelector, useDispatch} from 'react-redux';
import Pagination from '../Pagination/Pagination'
import PostsTestComp from './PostsTestComp'

function TestPosts() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(1);
    const postsPerPage = 12;


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

    const indexOfLastPost = currentPost * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);



    return (
        <div>
            <PostsTestComp posts={currentPosts} />
            <Pagination ctsPerPage={postsPerPage} totalCts={posts.length} paginate={paginate}/>
        </div>
    )
}

export default TestPosts