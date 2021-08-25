import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import TotalPostMenu from '../../../Components/AdminPanel/TotalPost/TotalPostMenu'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'

function AdminPostList() {
    const { push } = useHistory()
    const { isAuthenticated } = useAuth0()
    const userLogin = useSelector(state => state.userLogin)
    return (
        <div className=" min-h-screen flex flex-col justify-between">
            <Header />
            {
                isAuthenticated && userLogin?.isAdmin ?
                    <TotalPostMenu /> :
                    push("/home")
            }
            <Footer />
        </div>
    )
}

export default AdminPostList
