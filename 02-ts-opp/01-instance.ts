const date = new Date();
const date2 = new Date(2002, 1, 12);

class myDate {
    year: number;
    month: number;
    day: number;
    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    printDate() {
        return this.year + ' ' + this.month + ' ' + this.day;
    }

}
const myDate_ = new myDate(1995, 2, 15);
console.log(myDate_.printDate())