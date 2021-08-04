import React from 'react'
import CardPost from '../CardPost/CardPost'

function PostsTestComp({ posts }) {
    return (
        <div>
            {posts.map(post => {
                return <div>
                    <CardPost
                        title={post.title}
                        img={post.image}
                        category={post.category}
                        description={post.description}
                        key={post.id} />
                </div>
            })}
        </div>
    )
}

export default PostsTestComp
