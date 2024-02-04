export const convertCapitalizeFirstLetter = (word: string) => {
  if (word.length === 0) {
    return word;
  }

  const wordWithTrim = word.trim();

  return wordWithTrim.charAt(0).toUpperCase() + wordWithTrim.slice(1);
};
