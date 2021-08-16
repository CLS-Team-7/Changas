import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Basic from '../../Components/PanelUser/UserConfig/UserConfig'
import UserConfig from '../../Components/PanelUser/UserData/UserData'

function PanelUserConfig() {
    return (
        <div>
            <Header />
            <Basic/>
            <Footer />
        </div>
    )
}

export default PanelUserConfig
