const currentPerson = {
  name: "Ian",
  age: 27,
};

currentPerson.replyMessage = message => {
  if (message) {
    return `Hello! I just read your message: ${message}`;
  }

  return "Sorry! I don't know what you gonna say";
};

console.info(currentPerson.replyMessage("Yeah"));
