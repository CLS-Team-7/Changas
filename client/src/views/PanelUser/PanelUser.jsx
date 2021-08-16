import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import UserData from '../../Components/PanelUser/UserData/UserData'

function PanelUser() {
    const { push } = useHistory()
    const { isAuthenticated } = useAuth0()
    return (
        <div>
            <Header />
            {
                isAuthenticated ?
                    <UserData /> :
                    push("/home")
            }
            <Footer />
        </div>
    )
}

export default PanelUser
