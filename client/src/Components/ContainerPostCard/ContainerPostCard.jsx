import React, { useState, useEffect } from 'react'
import CardPost from '../CardPost/CardPost'
import { getAllPosts } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';

function ContainerPostCard() {
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
        <div className="container px-5 py-24 mx-auto ">
            {posts.map(post => {
                return <CardPost
                    title={post.title}
                    img={post.image}
                    category={post.category}
                    description={post.description} />
            })}


        </div>
    )
}

export default ContainerPostCard
