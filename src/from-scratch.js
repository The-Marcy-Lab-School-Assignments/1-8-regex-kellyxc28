const helloWorldRegex = (str) => {
  return /Hello World/gi.test(str);
};

const hasAVowel = (str) => {
  return /[aeiou]/gi.test(str);
};

const hasCatsOrDogs = (str) => {
  return /(cats|dogs)/gi.test(str);
};

const hasVowelStart = (str) => {
  return /^[aeiou]/gi.test(str);
};

const hasPunctuationEnd = (str) => {};

const hasNothingOrDigits = (str) => {};

const hasNoFlippers = (str) => {};

const isValidEmail = (str) => {};

const isValidPhoneNumber = (str) => {};

const matchAllNumbers = (str) => {};

const matchAllNumbersAsNumbers = (str) => {};

const matchAllWords = (str) => {};

const replaceAllNumbers = (str) => {};

const fixFileName = (str) => {};

const nameRedacter = (str) => {};

const camelToSnakeCase = (str) => {};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
