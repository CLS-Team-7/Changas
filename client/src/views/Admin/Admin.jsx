import React from 'react'
import AdminPanel from '../../Components/AdminPanel/AdminPanel'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function Admin() {
    return (
        <div className=" min-h-screen flex flex-col justify-between">
            <Header />
            <AdminPanel />
            <Footer />
        </div>
    )
}

export default Admin
