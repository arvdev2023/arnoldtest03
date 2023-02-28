import { Utils } from "./Utils";

test('Return the bigger value', () => {

    let arrayInput = [2, 88, 65, 17, 95, 39]
    let utilsForArray = new Utils();

    let maxValue = utilsForArray.verifyHightestOfArray(arrayInput);
    expect(maxValue).toEqual(95);

})