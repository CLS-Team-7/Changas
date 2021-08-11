class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
    this.createClientMessage = createClientMessage
  }
  saludar = () => {
    const message = this.createChatBotMessage(
      'Mucho gusto.! En que le puedo ayudar?'
    );
    this.addMessageToState(message);
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider
