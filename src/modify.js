const swapAllCases = (str) => {
  // if char is lowercased, convert it to uppercase
  // convert char to lowercase otherwise
  const swapCase = (char) =>
    /[a-z]/g.test(char) ? char.toUpperCase() : char.toLowerCase();
  return str.replace(/[A-Za-z]/g, swapCase);
};

// named exports
module.exports = {
  swapAllCases,
};
