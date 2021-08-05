import React from 'react'
import FaqComponen from '../../Components/FaqComponent/FaqComponent'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

export const FAQ = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <FaqComponen />
            <Footer />
        </div>
    )
}
