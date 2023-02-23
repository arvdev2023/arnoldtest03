// OOP abastracion, herencia, accesibilidad, polimorfismo

class myDate3 {
    public year: number;
    public month: number;
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
const myDate_3 = new myDate3(1995, 2, 15);