import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ContainerPostCard from '../Components/ContainerPostCard/ContainerPostCard'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
//import FilterButton from '../Components/FilterButton/FilterButton'
import ContainerPetition from '../Components/ContainerPostCard/ContainerPetition'
import ContainerOffer from '../Components/ContainerPostCard/ContainerOffer'




function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        /* dispatch(getJobOffers())
        dispatch(getJobPetitions()) */
    }, [dispatch])

    return (
        <div className="Home">
            <Header />

            <div className="bg-gray-100">
                <ContainerPostCard />
            </div>
            <Footer />
        </div>
    )
}

export default Home
