import React from 'react'
import { Link } from 'react-router-dom'
import Chatbot from 'react-chatbot-kit'
import config from '../Chatbot/config'
import ActionProvider from '../Chatbot/ActionProvider'
import MessageParser from '../Chatbot/MessageParser'
import './Footer.css'

function Footer() {
  return (
    <div >

        <div className="container w-1/5 mx-auto">
        <div className="m-2 rounded shadow-2xl overflow-hidden">
          <div className="group outline-none  accordion-section" tabIndex="1">
            <div className="group bg-gray-800 flex justify-center px-4 py-3 items-center text-white font-semibold text-lg transition ease duration-500 cursor-pointer pr-10 relative">
              <div className="group-focus:text-orange transition ease duration-500">
                *
              </div>
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
            <div className="bot">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
            </div>
          </div>
          </div>
          </div>
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
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
          © 2021 Changas —
          <Link
            to="https://github.com/Zven7/PG-Changas"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @GitHub
          </Link>
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
