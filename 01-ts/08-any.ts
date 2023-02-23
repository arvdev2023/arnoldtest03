let array4: any[] = [];
array4.push(1);
array4.push('');
array4.push({});

let ranText: any = 'sdsd';
const rr = ranText as string;
const rr1 = <string>ranText;

typeof (rr);