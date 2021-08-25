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

  hacerChangas = () => {
    const message = this.createChatBotMessage(
      'Somos una empresa tecnológica que conecta personas que buscan y ofrecen trabajos, unimos los dos puntos por medio de publicaciones'
    )
    this.addMessageToState(message)
  }

  guiaLinks = () => {
    const message = this.createChatBotMessage(
      <a href='https://changas.vercel.app/faq'>Ante cualquier duda en Changas puedes hacer click 🛠 aquí!!</a>,
    )
    this.addMessageToState(message)
  }

  plusHenry = () => {
    const message = this.createChatBotMessage(
      <a href='https://www.soyhenry.com/'>Si quieres conocer donde estudiaron mis creadores hace click aquí 💛!!</a>
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

  palabrasGracias2 = () => {
    const message = this.createChatBotMessage(
      'Gracias, 😊 que tengas un excelente dia',
    )
    this.addMessageToState(message)
  }

  registro = () => {
    const message = this.createChatBotMessage(
      'Para registrarte encontraras un boton arriba a la derecha donde podras ingresar con tu cuenta de Google',
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
      'Para publicar un trabajo deberás dirigirte a la sección de Publicar, llenar el formulario y aceptar los términos y condiciones del mismo.',
    )
    this.addMessageToState(message)
  }

  ayudaPublicarNecesidad = () => {
    const message = this.createChatBotMessage(
     'Para contratar un servicio deberás dirigirte a la sección de Publicar hacer click sobre el servicio que necesites y seguir los pasos',
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
