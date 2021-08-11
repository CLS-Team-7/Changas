class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

    parse(message) {

      const lowercase = message.toLowerCase();
      if (!lowercase) {
        this.actionProvider.vacio();
    }
      if (lowercase.includes("hi")) {
          this.actionProvider.saludar();
      }
      if (lowercase.includes("hola")) {
          this.actionProvider.saludar();
      }
      if (lowercase.includes("buenas")) {
          this.actionProvider.saludar();
      }
      if (lowercase.includes("buenos")) {
          this.actionProvider.saludar();
      }
      if (lowercase.includes("como estas")) {
          this.actionProvider.saludar();
      }
      if (lowercase.includes("ofrecer")) {
        this.actionProvider.ayudaOfrecer();
    }
      if (lowercase.includes("quiero")) {
        this.actionProvider.ayudaOfrecer();
    }
      if (lowercase.includes("necesito")) {
        this.actionProvider.ayudaOfrecer();
    }
      if (lowercase.includes("como puedo")) {
        this.actionProvider.ayudaOfrecer();
    }
      if (lowercase.includes("como hago")) {
        this.actionProvider.ayudaOfrecer();
    }
      if (lowercase.includes("como tengo")) {
        this.actionProvider.ayudaOfrecer();
    }
    }
  }

  export default MessageParser;
