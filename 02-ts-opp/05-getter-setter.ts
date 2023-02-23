class myDate5 {
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
    get getYear(){
        return this.year;
    }
    set setYear(newYear:number){
        this.year=newYear;
    }

}
const myDate_5 = new myDate5(1995, 2, 15);
myDate_5.setYear=15;