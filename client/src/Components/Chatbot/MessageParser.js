class MessageParser {
    constructor(ActionProvider, state) {
      this.ActionProvider = ActionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();

      if (lowercase.includes("Hola")) {
          this.ActionProvider.saludar();
      }
    }
  }
  
  export default MessageParser;
  