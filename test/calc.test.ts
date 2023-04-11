// callback should only be called when given a string argument
function callOnString(callback, flavour) {
  if (typeof flavour === 'string') {
    callback(flavour);
  }
}
