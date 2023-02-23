class myDate4 {
    private year: number;
    private month: number;
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
const myDate_4 = new myDate4(1995, 2, 15);