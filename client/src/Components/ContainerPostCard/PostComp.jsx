import React from 'react'
import CardPost from '../CardPost/CardPost'

function PostComp({ posts }) {
    if (posts?.length === 0) {
        return (
            <div className="container px-5 py-24 m-auto ">
                <h1>No hay posts para esta categoría aún</h1>
            </div>
        )
    }
    return (
        <div className=" container flex flex-wrap -m-4">
            {posts?.map(post => {
                return <CardPost
                    title={post.title}
                    img={post.image}
                    category={post.category}
                    description={post.description}
                    specialty={post.specialty}
                    id={post.id}
                    isPremium={post.isPremium}
                    key={post.id} />
            })}
        </div>
    )
}

export default PostComp
