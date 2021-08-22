import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ContainerPostCard from '../Components/ContainerPostCard/ContainerPostCard'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SelectServiceFilter from '../Components/FilterButton/SelectServiceFilter'
import { getFilterType } from '../Redux/actions'




function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFilterType("all"))
    }, [dispatch])

    return (
        <div className="Home">
            <Header />

            <div className="bg-gray-100 relative">
                <div className="absolute top-0 right-0 m-6">
                    <SelectServiceFilter />
                </div>
                <ContainerPostCard />
            </div>
            <Footer />
        </div>
    )
}

export default Home
