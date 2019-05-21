import sortLetter from './sort';
import checkValue from './value';


describe('inspect expected result', () => {
    test('expect sort string by alphabet', () => {
        const string = 'Stressed';
        const resultString = sortLetter(string);
        expect(resultString).toBe('deerssst')
    })
});



describe('check return result', () => {
    test('if expect return true', () => {
        const origin = 'Stressed';
        const anagramstr='Desserts';
        const result =checkValue(origin,anagramstr);
        expect(result).toBeTruthy()
    })
        test('if expect return false', () => {
        const origin = 'Stressed';
        const anagramstr='Deserts';
        const result =checkValue(origin,anagramstr);
        expect(result).not.toBeTruthy()})
})