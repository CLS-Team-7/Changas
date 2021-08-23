import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chatbot from 'react-chatbot-kit'
import config from '../Chatbot/config'
import ActionProvider from '../Chatbot/ActionProvider'
import MessageParser from '../Chatbot/MessageParser'
import changoImg from './g569.png';
import './Footer.css'

function Button() {
  return (
    <div className="bot">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  )
}

function Footer() {
  let [click, setClick] = useState(false)

  let handleClick = (e) => {
    setClick(!click)

    if(click){
      document.getElementById('chango').classList.remove('btn-no-round') 
    } else{
      document.getElementById('chango').classList.add('btn-no-round')
    }
  }
  return (
    <div>
      <div className="boot-Container drop-shadow-l ">
        <button id='chango' className="btn" onClick={handleClick}>
          <img className='w-8 filter drop-shadow-2xl' src={changoImg} alt="" />
        </button>
        {click ? <Button /> : null}
      </div>
      <footer className="text-gray-600 body-font">
        <div className="px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            to="/"
            className="flex title-font font-medium items-center  mb-4 md:mb-0"
          >
            <img
              src="https://media.discordapp.net/attachments/868284643886120985/872487887319474236/1.png?width=797&height=171"
              alt="Logo"
              width="120"
            />
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2021 Changas — Todos los derechos reservados
            <span className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              <Link
                to="https://github.com/Zven7/PG-Changas"
                className="text-gray-600 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                @GitHub
              </Link>
            </span>
          </p>

        </div>
      </footer>
    </div>
  )
}

export default Footer
