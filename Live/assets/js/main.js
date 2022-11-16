// Datums

const hours = 23;

// Date constructor
// erstellt ein neues Datum-Objekt mit dem Aktuellen Datum und der Uhrzeit
let date = new Date();

console.log(date.toString());

// Syntax: new Date(year, month, day, hours, minutes, seconds, miliseconds)
// WICHTIG! Zählt con 0 an! (Januar = 0, Februar = 1)
date = new Date(2000, 9, 2, 11, 45, 10, 0,);

console.log(date);

date = new Date(2000, 9, 2, 11, 45, 10);

date = new Date(2000, 9, 2, 11, 45,);

date = new Date(2000, 9, 2, 11);
date = new Date(2000, 9, 2,);
date = new Date(2000, 9);

// wenn der construktor nur mit einem Wert angegeben wird, gibt man die Milisekunden an 
// es wird der Unix Timestamp ausgegeben
// der Unix TimeStamp wird in UTC / GMT angegeben
date = new Date(2000);

// ISO 8601 Formatierung 
date = new Date("1995-12-17T03:24:00");

console.log(date);

// evtl in manchen Ländern nciht unterstützt
date = new Date("October 13, 2008 11:13:30");

console.log(date);

console.log(typeof date);
console.log(typeof Date);


// Date toString Methoden

// die meisten Objekte haben die toString() Methode
console.log(date.toString());

// umwandeln in UTC/GMT 
console.log(date.toUTCString());


console.log(date.toDateString());

// wandelt das Datum in die Schreibweise des landes
console.log(date.toLocaleDateString("de-DE"));
console.log(date.toLocaleDateString("en-US"));
console.log(date.toLocaleDateString("en-UK"));

// wandelt die Zeit in die Schreibweise des Landes um
console.log(date.toLocaleTimeString("de-DE"));
console.log(date.toLocaleTimeString("en-US"));
console.log(date.toLocaleTimeString("en-UK"));


// Datum und Zeit in Kombination

console.log(date.toLocaleString("de-DE"));
console.log(date.toLocaleString("en-US"));
console.log(date.toLocaleString("en-UK"));


console.log(date.getTime()); // Unix Time
console.log(date.getDate());


const date1 = new Date("1995-12-17T03:24:00");
const date2 = new Date();


console.log(date2.getTime() - date1.getTime());

date = new Date();

console.log(date.getFullYear());

console.log(date.getMonth());

console.log(date.getDate());



let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


console.log(months[date.getMonth()]);


// wird von 1-31 gezählt
console.log(date.getDate());

// Gibt die Stunden als zahl aus : 0-23
console.log(date.getHours());

// Gibt die Minuten als zahl aus : 0-59
console.log(date.getMinutes());

// wird 0-59 gezählt
console.log(date.getSeconds());

// wird 0-999 gezählt
console.log(date.getMilliseconds());


//gibt den Tag der Woche als zahl aus
// sonntag = 0, Samstarg = 6
console.log(date.getDay());



let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log(days[date.getDay()]);

// Datum wird auf aktuellen Zeitpunkt festegelegt
const date3 = new Date();

console.log(date3);

// ändert das Jahr auf 2023
date3.setFullYear(2023);
console.log(date3);

// ändert den Monat (0-11)
date3.setMonth(3);
console.log(date3);

// set methode ähnlich zu den get Methoden

// setzt den Tag / 1-31
date3.setDate(10);
console.log(date3);

const date4 = new Date();

date4.setDate(35);
console.log(date4);

const date5 = new Date();

date5.setDate(date5.getDate() + 7);

console.log(date5);


// Für die Aufgaben: Wir kennen bereits if-else
const x = 5;

let kleiner5;
if (x < 5) {
    // mach das
    kleiner5 = true;
} else {
    // mach das andere
    kleiner5 = false;
}

//Ternary Operator
// Syntax: 
// condition ? iftrue : iffalse
kleiner5 = x < 5 ? true : false;

console.log(kleiner5);



Math.abs(7.25); // 7.25
Math.abs(-7.25); // 7.25
Math.abs(null); // 0
Math.abs("Hello"); // NaN
Math.abs(2 - 3); // 1
Math.abs(10 - 5); // 5



Math.sqrt(0); // 0
Math.sqrt(1); // 1
Math.sqrt(2); // 1.414...
Math.sqrt(9); // 3
Math.sqrt(64); // 8
Math.sqrt(-9); // NaN



