export class Utils {
    constructor(){}
     verifyPalindrome(word: string): boolean {
        let stringReverse: string = '';
        for (let i = (word.length - 1); i >= 0; i--) {
            stringReverse = stringReverse + word.charAt(i);
        }
        return (stringReverse === word);
    }
     verifyHightestOfArray(arrayNumbers: number[]): number {
        let numeroMayor = 0;
        for (let i = 0; i < arrayNumbers.length; i++) {
            if (arrayNumbers[i] >= numeroMayor) {
                numeroMayor = arrayNumbers[i];
            }
        }
        return numeroMayor;
    }
     transformStringToArray(wordInput: string): string[] {
        let res: string[] = []
        for (let i = 0; i < wordInput.length; i++) {
            res.push(wordInput.charAt(i));
        }
        return res
    }

}