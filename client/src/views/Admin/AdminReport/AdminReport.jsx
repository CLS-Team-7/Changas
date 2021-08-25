import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import ReportsMenu from '../../../Components/AdminPanel/Reports/ReportsMenu'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'

function AdminReport() {
    const { isAuthenticated } = useAuth0()
    const { push } = useHistory()
    const userLogin = useSelector(state => state.userLogin)
    return (
        <div>
            <Header />
            {
                isAuthenticated && userLogin?.isAdmin ?
                    <ReportsMenu /> :
                    push("/home")
            }
            <Footer />
        </div>
    )
}

export default AdminReport
