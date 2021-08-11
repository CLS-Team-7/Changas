import { createChatBotMessage } from 'react-chatbot-kit'

const config = {
  botName: 'Asistente de Changas',
  initialMessages: [
    createChatBotMessage(
      `Hola! Gracias por visitarnos, en que te puedo ayudar?`,
    ),
  ],
}

export default config
