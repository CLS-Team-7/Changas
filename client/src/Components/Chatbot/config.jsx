import { createChatBotMessage } from 'react-chatbot-kit'

const config = {
  botName: 'Changas',
  customComponents: {
    header: () => (
      <div
        style={{ color: 'white', backgroundColor: 'blue', padding: '5px', borderRadius: '3px' }}
      >
        Chat de ayuda
      </div>
    ),
  },
  initialMessages: [
    createChatBotMessage(
      'Hola! Soy Chango, en que le puedo ayudar?',
    ),
  ],
}

export default config
