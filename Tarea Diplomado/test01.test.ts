import { Utils } from "./Utils";

test('Verify palyndrome word--', () => {

    const utilForPalyndrome = new Utils();
    const input = "ANALAVALANA";
    const verifyPalindrome = utilForPalyndrome.verifyPalindrome(input);
    expect(verifyPalindrome).toBeTruthy();

})
