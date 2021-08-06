import React from 'react'
import CreateCategory from '../../../Components/AdminPanel/CreateCategory/CreateCategory'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'

function AdminCategory() {
    return (
        <div className=" min-h-screen flex flex-col justify-between">
            <Header />
            <CreateCategory />
            <Footer />
        </div>
    )
}

export default AdminCategory
