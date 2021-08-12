class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }

  saludar = () => {
    const message = this.createChatBotMessage(
      'Mucho gusto 😄! En que le puedo ayudar?',
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
      'Ante cualquier duda dirígete a la FAQ para conocer más detalles',
    )
    this.addMessageToState(message)
  }

  palabrasInsultos = () => {
    const message = this.createChatBotMessage(
      'Por favor, cuide su vocabulario 🤬🚫',
    )
    this.addMessageToState(message)
  }

  palabrasGracias = () => {
    const message = this.createChatBotMessage(
      'Gracias a vos 😊',
    )
    this.addMessageToState(message)
  }

  palabrasBroma = () => {
    const message = this.createChatBotMessage(
      'Acabamos de congelar sus cuentas bancarias, con Changas no se jode 😈',
    )
    this.addMessageToState(message)
  }

  ayudaPublicarOfrecer = () => {
    const message = this.createChatBotMessage(
      'Para publicar un trabajo deberás dirigirte a la sección de posteos, llenar el formulario y aceptar los términos y condiciones del mismo.',
    )
    this.addMessageToState(message)
  }

  ayudaPublicarNecesidad = () => {
    const message = this.createChatBotMessage(
      'Para contratar un servicio deberás dirigirte a la sección de posteos, hacer click sobre el servicio que necesites y seguir todos sus pasos.',
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
