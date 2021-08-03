import React from 'react'

function PostsTestComp({posts}) {
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

export default PostsTestComp
