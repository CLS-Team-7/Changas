import React from 'react'
import MenuAdmin from '../../Components/AdminPanel/MenuAdmin'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function Admin() {
    return (
        <div className=" min-h-screen flex flex-col justify-between">
            <Header />
            <MenuAdmin />
            <Footer />
        </div>
    )
}

export default Admin
