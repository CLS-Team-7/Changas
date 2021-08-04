import React from 'react'
import CardPost from '../Components/CardPost/CardPost'
import ContainerPostCard from '../Components/ContainerPostCard/ContainerPostCard'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function Home() {
    return (
        <div className="Home">
            <Header />
            <ContainerPostCard />
            <Footer />
        </div>
    )
}

export default Home
