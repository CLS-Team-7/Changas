import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import PostCreate from '../../Components/PostCreate/PostCreate'

function CreatePost() {
    return (
        <div className=" min-h-screen flex flex-col justify-between">
            <Header />
            <PostCreate />
            <Footer />
        </div>
    )
}

export default CreatePost
