import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../../../Components/Footer/Footer'
import Header from '../../../Components/Header/Header'
import UserConfigPanel from '../../../Components/PanelUser/UserConfig/UserConfigPanel'

function PanerUserConfig() {
    const { push } = useHistory()
    const { isAuthenticated } = useAuth0()
    return (
        <div>
            <Header />
            {
                isAuthenticated ?
                    <UserConfigPanel /> :
                    push("/home")
            }
            <Footer />
        </div>
    )
}

export default PanerUserConfig
