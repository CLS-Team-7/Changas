class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }

  saludar = () => {
    const message = this.createChatBotMessage(
      'Mucho gusto.! En que le puedo ayudar?',
    )
    this.addMessageToState(message)
  }

  vacio = () => {
    const message = this.createChatBotMessage(
      'Primero debes escribir tu consulta',
    )
    this.addMessageToState(message)
  }

  ayudaOfrecer = () => {
    const message = this.createChatBotMessage(
      'Dirígete a la FAQ para conocer más detalles',
    )
    this.addMessageToState(message)
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }
}

export default ActionProvider
