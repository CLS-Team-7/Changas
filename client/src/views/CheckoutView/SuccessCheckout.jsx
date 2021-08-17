import React from 'react'
import PaymentSuccessTest from '../../Components/Checkout/PaymentSuccessTest'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function SuccessCheckout() {
    return (
        <div>
            <Header />
            <PaymentSuccessTest />
            <Footer />
        </div>
    )
}

export default SuccessCheckout
