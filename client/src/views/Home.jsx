import React from 'react'
import ContainerPostCard from '../Components/ContainerPostCard/ContainerPostCard'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import FilterButton from '../Components/FilterButton/FilterButton'
import Chatbot from 'react-chatbot-kit'
import config from '../Components/Chatbot/config'
import ActionProvider from '../Components/Chatbot/ActionProvider'
import MessageParser from '../Components/Chatbot/MessageParser'


function Home() {
    return (
        <div className="Home">
            <Header />
            <FilterButton />
            <ContainerPostCard />
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
      />
            <Footer />
        </div>
    )
}

export default Home
