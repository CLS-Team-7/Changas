import React from 'react'
import ContainerPostCard from '../Components/ContainerPostCard/ContainerPostCard'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import FilterButton from '../Components/FilterButton/FilterButton'



function Home() {
    return (
        <div className="Home">
            <Header />
            <FilterButton />
            <ContainerPostCard />
            <Footer />
        </div>
    )
}

export default Home
