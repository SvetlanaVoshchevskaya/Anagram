import sortLetter from './sort';
function checkValue(mainStr, testStr) {
   return sortLetter(mainStr) === sortLetter(testStr)
}
export default checkValue
