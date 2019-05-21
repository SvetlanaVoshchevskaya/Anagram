function sortLetter(str) {
   return str.toLowerCase()
    .split('')
    .map(itemStr => itemStr.trim())
    .sort()
    .join('')
};
export default sortLetter