const isPermitted = confirm("Can we ask your name?");

if (isPermitted) {
  const personName = prompt("What is your name?");

  alert(`Your name is ${personName}`);
} else {
  alert("Okay. No problem :)");
}
