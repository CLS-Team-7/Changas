class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {

      const lowercase = message.toLowerCase();
      if (lowercase.includes("hola")) {
          this.actionProvider.saludar();
      }
      if (lowercase.includes("ofrecer")) {
        this.actionProvider.ayudaofrecer();
    }
    }
  }
  
  export default MessageParser;
  