export const FirstCapitalWord = (word: string) => {
  const newWord = word[0].toUpperCase() + word.substring(1);
  return newWord;
};
