import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import UserProfile from '../../Components/UserProfile/UserProfile'

function Profile() {
    return (
        <div className="Profile">
            <Header />
            <UserProfile />
            <Footer />
        </div>
    )
}

export default Profile
