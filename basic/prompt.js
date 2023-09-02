const isPermitted = confirm("May we know your name?");

if (isPermitted) {
  const personName = prompt("What is your name?");

  alert(`Your name is ${personName}`);
} else {
  alert("Okay, no problem.");
}
