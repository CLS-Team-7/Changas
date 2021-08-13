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
    if (lowercase.includes("contratar")) {
      this.actionProvider.ayudaPublicarNecesidad();
    }
    if (lowercase.includes("publicar")) {
      this.actionProvider.ayudaPublicarOfrecer();
    }
    if (lowercase.includes("quiero")) {
      this.actionProvider.ayudaOfrecer();
    }
    if (lowercase.includes("gracias")) {
      this.actionProvider.palabrasGracias();
    }
    if (lowercase.includes("puto")) {
      this.actionProvider.palabrasInsultos();
    }
    if (lowercase.includes("soretes")) {
      this.actionProvider.palabrasBroma();
    }
    if (lowercase.includes("gil")) {
      this.actionProvider.palabrasInsultos();
    }
  }
}

export default MessageParser;
