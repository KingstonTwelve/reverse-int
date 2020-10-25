module.exports = function reverse (n) {
  const reversed = n.toString().split('').reverse();
  return reversed[reversed.length - 1] === '-' ? reversed.slice(0, reversed.length - 1).join('') : reversed.join('');
}
