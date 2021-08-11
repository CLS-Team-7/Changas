import React, { useEffect, useState } from 'react'
import ContainerPostCard from '../Components/ContainerPostCard/ContainerPostCard'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import FilterButton from '../Components/FilterButton/FilterButton'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'


function Home() {
    /*   const { user, isAuthenticated } = useAuth0()
      const [accountUser, setAccountUser] = useState({})
      const dispatch = useDispatch() */

    /*     setAccountUser({
            sub: user?.sub,    // ver con auth0
            given_name: user?.given_name,
            family_name: user?.family_name,
            email: user?.email,
            picture: user?.picture,
        }) */
    /*     if (isAuthenticated === true) {
            return
        } */

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
