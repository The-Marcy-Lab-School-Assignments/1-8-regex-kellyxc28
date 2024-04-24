/** FEEDBACK: Great job passing all test cases! */
const helloWorldRegex = (str) => {
  // true, if it contains "Hello world" regardless of case
  // false, otherwise
  return /Hello World/gi.test(str);
};

const hasAVowel = (str) => {
  // true, if at least one vowel exists
  // false, otherwise
  return /[aeiou]/gi.test(str);
};

const hasCatsOrDogs = (str) => {
  // true, if it contains "cats" or "dogs"
  // false, otherwise
  return /(cats|dogs)/gi.test(str);
};

const hasVowelStart = (str) => {
  // true, if it starts with a vowel regardless of case
  // false, otherwise
  return /^[aeiou]/gi.test(str);
};

const hasPunctuationEnd = (str) => {
  // true, if it ends with a punctuation
  // false, otherwise
  return /[.!?]$/gi.test(str);
};

const hasNothingOrDigits = (str) => {
  // true, if it contains nothing or digits
  // false, otherwise
  return /(^\s*\d*$)/gi.test(str);
};

const hasNoFlippers = (str) => {
  // true, if it doesn't contains "flippable letters" (given)
  // false, otherwise
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
  // [(]?[\d]{3}[)]? => 3 digits, with () being optional
  // [-\s\.]+ => accepts hyphens, space, or dot/period
  // [\d]{3} => 3 digits
  // [\d]{4} => 4 digits
  return /^[(]?[\d]{3}[)]?[-\s\.]+[\d]{3}[-\s\.]+[\d]{4}$/.test(str);
};

const matchAllNumbers = (str) => {
  // take the numbers from string and return them as string format in an array
  // return empty array otherwise
  return str.match(/\d+/g) || [];
};

const matchAllNumbersAsNumbers = (str) => {
  // similar to the previous function, but return an array of the numbers as numbers
  // + turns string into number
  const regex = str.match(/\d+/g);
  // do the regex otherwise
  return regex === null ? [] : regex.map((num) => +num);
};

const matchAllWords = (str) => {
  // take each word in the string and return an array of them as separate strings
  const regex = str.match(/([A-Za-z][']?)+/g);
  // if null, return an empty array
  // do the regex otherwise
  return regex === null ? [] : regex;
};

const replaceAllNumbers = (str) => {
  // replace all of the numbers with "???"
  return str.replace(/\d+/g, '???');
};

const fixFileName = (str) => {
  // separate the words with "_"
  return str.replace(/\s+/g, '_');
};

const nameRedacter = (str) => {
  // replace names with "REDACTED"
  return str.replace(/\w[B-Z^AI]+/g, 'REDACTED');
};

// callback function for next function
const replaceLetterCase = (letter) => {
  return `_${letter.toLowerCase()}`;
};

const camelToSnakeCase = (str) => {
  // un-camelcase words and add a "_" in between them
  return str.replace(/[A-Z]+/g, replaceLetterCase);
};

// named exports
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
