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

const hasPunctuationEnd = (str) => {
  return /[.!?]$/gi.test(str);
};

const hasNothingOrDigits = (str) => {
  return /(^\s*\d*$)/gi.test(str);
};

const hasNoFlippers = (str) => {
  return /^[^BCcDEHIKOoXxl]*$/.test(str);
};

const isValidEmail = (str) => {
  // ^              start  
  // [\w-\.]        includes words (letter, digit, or underscore), hyphen, and period 
  // +              one or more of this   
  // @              @ symbol 
  // ([\w-]+\.)     includes words (letter, digit, or underscore), hyphen, and period  
  // [\w-]          includes words (letter, digit, or underscore), and hyphen  
  // {2,4}          limit 2-4 characters 
  // $              end 
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
};

const isValidPhoneNumber = (str) => {
  return /^[(]?[\d]{3}[)]?[-\s\.]+[\d]{3}[-\s\.]+[\d]{4}$/.test(str);
};

const matchAllNumbers = (str) => {
  return str.match(/\d+/g) || [];
};

const matchAllNumbersAsNumbers = (str) => {
  // + turns string into number 
  const regex = str.match(/\d+/g);
  return regex === null ? [] : regex.map((num) => +num);
};

const matchAllWords = (str) => {
  const regex = str.match(/([A-Za-z][']?)+/g);
  return regex === null ? [] : regex;
};

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
