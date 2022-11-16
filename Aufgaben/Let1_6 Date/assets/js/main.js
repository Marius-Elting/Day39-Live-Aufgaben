let date = new Date();




let date1 = new Date(1999, 10, 5, 15); //PM
let date2 = new Date();
let date3 = new Date(2019, 12, 3, 12); //AM
let date4 = new Date(2000, 1, 1, 11); //AM



ampm = date1.getHours() <= 12 ? "AM" : "PM";
console.log(ampm);
ampm = date2.getHours() <= 12 ? "AM" : "PM";
console.log(ampm);
ampm = date3.getHours() <= 12 ? "AM" : "PM";
console.log(ampm);
ampm = date4.getHours() <= 12 ? "AM" : "PM";
console.log(ampm);
