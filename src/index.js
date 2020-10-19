module.exports = function reverse (n) {
  let result = parseFloat(`${n}`.split('').reverse().join(''));
  return result;
}
