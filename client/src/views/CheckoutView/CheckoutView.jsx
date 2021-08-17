import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import CheckoutTestBACK from '../../Components/Checkout/CheckoutTestBACK'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function CheckoutView() {
    const { isAuthenticated } = useAuth0()
    const { push } = useHistory()
    return (
        <div>
            <Header />
            {
                isAuthenticated ?
                    <CheckoutTestBACK /> :
                    push("/home")

            }
            <Footer />
        </div>
    )
}

export default CheckoutView
