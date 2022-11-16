// let randomZahl = math.Floor(math.Random() * 10 + 1);

let button = document.getElementById("button");
let output = document.getElementById("output");

// button.addEventListener("click", () => {
//     let randomZahl = Math.floor(Math.random() * 10 + 1);
//     console.log(randomZahl);
//     let input = Number(document.getElementById("number"));
//     let result = randomZahl === input ? "Glückwunsch du hast die gleiche Zahl wie der Computer" : "Leider daneben";
//     output.innerHTML = result;
// });


button.addEventListener("click", () => {
    let randomZahl = Math.floor(Math.random() * 10 + 1);
    console.log(randomZahl);
    let input = prompt("Bitte gib eine Zahl ein, 0");
    let result = randomZahl === input ? "Glückwunsch du hast die gleiche Zahl wie der Computer" : "Leider daneben";
    output.innerHTML = result;
});