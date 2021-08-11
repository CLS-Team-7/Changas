import { createChatBotMessage } from 'react-chatbot-kit'
import favicon from './g569.png'

const config = {
  botName: 'Changas',
  customComponents: {
    // Replaces the default header
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
      'Hola! Yo soy Chango, en que le puedo ayudar?',
    ),
  ],
}

export default config
