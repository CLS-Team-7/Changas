import { createChatBotMessage } from 'react-chatbot-kit'

const config = {
  botName: 'Changas',
  
  customComponents: {
    header: () => (
      <div
        style={{ color: 'white', backgroundColor: '#2d3748', padding: '5px', borderRadius: '3px' }}
      >
        Chat de ayuda
      </div>
    ),
  },
  
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#2d3748",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#2d3748",
    },
  },

  initialMessages: [
    createChatBotMessage(
      'Hola! Soy Chango, en que le puedo ayudar?',
    ),
  ],
}

export default config
