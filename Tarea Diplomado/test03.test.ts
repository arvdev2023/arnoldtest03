import { Utils } from "./Utils";
test('Verify transformarion of a String into an Array', () => {
    let utilArray = new Utils();
    let input = 'Hello';
    let outputExpected = ['H', 'e', 'l', 'l', 'o']
    let outputReturned = utilArray.transformStringToArray(input);

    expect(outputReturned).toEqual(outputExpected);
})