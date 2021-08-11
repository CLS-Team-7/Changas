import { createChatBotMessage } from 'react-chatbot-kit'

const config = {
  botName: "Changas",
  initialMessages: [
    createChatBotMessage(
      "Hola! Gracias por visitarnos, en que le puedo ayudar?",
    ),
  ],
}

export default config
