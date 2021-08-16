import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CreateUser from '../../../Components/AdminPanel/CreateUser/CreateUser'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'

function AdminUserCreate() {
    const { push } = useHistory()
    const { isAuthenticated } = useAuth0()
    const userLogin = useSelector(state => state.userLogin)
    return (
        <div className=" min-h-screen flex flex-col justify-between">
            <Header />
            {
                isAuthenticated && userLogin?.isAdmin ?
                    <CreateUser /> :
                    push("/home")
            }
            <Footer />
        </div>
    )
}

export default AdminUserCreate
