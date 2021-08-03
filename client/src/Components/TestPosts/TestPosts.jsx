import React, {useState, useEffect} from 'react';
import { getAllPosts } from '../../Redux/actions';
import { useSelector, useDispatch} from 'react-redux';


function TestPosts() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const postList = useSelector(state => state.postList)

    useEffect(() => {
        setPosts(postList)
    }, [postList])

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])


    return (
        <div>
            {posts.map(post => {
                return <div>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt="" />
                </div>
            })}
        </div>
    )
}

export default TestPosts
