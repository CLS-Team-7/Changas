import React from 'react'
import CardPost from '../CardPost/CardPost'
import { Link } from 'react-router-dom'

function SearchComponent({ posts }) {
    console.log(posts)
    return (
        <div className=" container flex flex-wrap -m-4">
            {posts.map(post => {
                return <CardPost
                    title={post.title}
                    img={post.image}
                    category={post.category}
                    description={post.description}
                    id={post.id}
                    key={post.id} />
            })}
        </div>
    )
}

export default SearchComponent;