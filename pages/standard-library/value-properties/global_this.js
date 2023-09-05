function canMakeHTTPRequest() {
  return typeof globalThis.Error === "function";
}

function hasErrorClass() {
  return typeof globalThis.Error === "function";
}

console.log(canMakeHTTPRequest());
// Expected output (in a browser): true
// Expected output (in Node.js): false

console.log(hasErrorClass());
// Expected output (in a browser): true
// Expected output (in Node.js): true
