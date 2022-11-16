function AmPm(date) {
    let fullDate = new Date(date);
    let ampm = fullDate.getHours() <= 12 ? "AM" : "PM";
    console.log(ampm);
}

AmPm(1999, 10, 5, 15); //PM
AmPm();
AmPm(2019, 12, 3, 12); //AM
AmPm(2000, 1, 1, 11); 