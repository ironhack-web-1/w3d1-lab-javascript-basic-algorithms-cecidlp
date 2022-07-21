// Iteration 1: Names and Input
const hacker1 = "Ceci";
const hacker2 = "Fulanito";

console.log("The driver's name is" + " " + hacker1)
console.log("The navigator's name is" + " " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("It seems that the navigator has the longest name it has " + hacker1.length + " characters")
}
else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
}
else {
    console.log("Wow, you both have equally long names, they have " + hacker1.length + " characters")
}
   
// Iteration 3: Loops

for (const value of hacker1) {
    console.log(value.toUpperCase());
}


let reversed ="";

for (const reversedName of hacker2) {
    console.log(reversed);
    reversed = reversedName + reversed;
}


var arr = [hacker1, hacker2];
arr.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(arr);