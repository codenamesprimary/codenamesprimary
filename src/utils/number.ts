const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const isNumber = (char: string) => {
  if (numArray.includes(parseInt(char))) return true;
  return false;
};
