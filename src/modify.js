const swapAllCases = (str) => {
  const swapCase = (char) => (/[a-z]/g).test(char) ? char.toUpperCase() : char.toLowerCase();
  return str.replace((/[A-Za-z]/g), swapCase);
};

module.exports = {
  swapAllCases,
};
