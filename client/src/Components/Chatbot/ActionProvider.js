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

  ayudaofrecer = () => {
    const message = this.createChatBotMessage(
      'Dirígete a la sección de post, ahora ve al botón crear post, necesitas llenar todos los campos según el tipo de publicación para realizar un posteo exitoso!!',
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
