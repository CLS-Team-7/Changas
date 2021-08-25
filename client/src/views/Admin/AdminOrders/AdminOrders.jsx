import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import OrdersMenu from '../../../Components/AdminPanel/Orders/OrdersMenu'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'

function AdminOrders() {
    const { isAuthenticated } = useAuth0()
    const { push } = useHistory()
    const userLogin = useSelector(state => state.userLogin)
    return (
        <div>
            <Header />
            {
                isAuthenticated && userLogin?.isAdmin ?
                    <OrdersMenu /> :
                    push("/home")
            }
            <Footer />
        </div>
    )
}

export default AdminOrders
