import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import MenuAdmin from '../../Components/AdminPanel/MenuAdmin'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function Admin() {
    const { isAuthenticated } = useAuth0()
    const { push } = useHistory()
    const userLogin = useSelector(state => state.userLogin)

    return (
        <div className=" min-h-screen flex flex-col justify-between">
            <Header />
            {
                isAuthenticated && userLogin?.isAdmin ?
                    <MenuAdmin /> :
                    push("/home")
            }
            <Footer />
        </div>
    )
}

export default Admin
