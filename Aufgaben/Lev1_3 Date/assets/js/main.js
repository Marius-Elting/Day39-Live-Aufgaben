let date = new Date("October 23 2222 13:25:11");
let date1 = new Date();
date1.setDate(23);
date1.setFullYear(2222);
date1.setMonth(9);
console.log(date1);

let date2 = new Date();
date2.setDate(24);
date2.setFullYear(2123);
date2.setMonth(1);
console.log(date2);

let date3 = new Date();
date3.setDate(24);
date3.setFullYear(2123);
date3.setMonth(2);
console.log(date3);


let date4 = new Date();
date4.setDate(03);
date4.setFullYear(2123);
date4.setMonth(2);
console.log(date4);


let date5 = new Date();
date5.setDate(date5.getDate() + 30);

console.log(date5);


