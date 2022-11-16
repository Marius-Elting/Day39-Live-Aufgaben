let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

// let date1 = new Date("2001,3,4");
// let date2 = new Date("2019,12,24");
// let date3 = new Date("1410,07,15");


// // console.log(list[date1.getMonth()]);
// // console.log(list[date2.getMonth()]);
// // console.log(list[date3.getMonth()]);


function monatsName(a) {
    return list[new Date(a).getMonth()];
}

console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli

console.log(monatsName("1410,01,2")); //Juli