import React from 'react'
import CreateUser from '../../../Components/AdminPanel/CreateUser/CreateUser'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'

function AdminUserCreate() {
    return (
        <div className=" min-h-screen flex flex-col justify-between">
            <Header />
            <CreateUser />
            <Footer />
        </div>
    )
}

export default AdminUserCreate
