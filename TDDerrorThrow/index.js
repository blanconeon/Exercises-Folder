const Phrase = {
  initials(inputName) {
    if (typeof inputName !== "string") {
      throw new Error("ERROR: only use string");
    }
    const initials = [];
    const words = inputName.split(" ");

    words.forEach((word) => {
      initials.push(word.charAt(0));
    });

   return initials.join("");
  }
}

module.exports = Phrase;