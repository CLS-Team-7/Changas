import React from 'react'
import CardPost from '../CardPost/CardPost'

function PostComp({ posts }) {
    return (
        <div className=" container flex flex-wrap -m-4">
            {posts.map(post => {
                return <CardPost
                    title={post.title}
                    img={post.image}
                    category={post.category}
                    description={post.description}
                    specialty={post.specialty}
                    id={post.id}
                    key={post.id} />
            })}
        </div>
    )
}

export default PostComp
