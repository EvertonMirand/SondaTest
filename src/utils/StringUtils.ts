export const removeLastWord = (text: string): string => {
  const lastIndex = text.lastIndexOf(' ');
  return text.substring(0, lastIndex);
};

export const getLastWord = (text: string): string => {
  const lastIndex = text.lastIndexOf(' ');
  return text.substring(lastIndex, text.length);
};
