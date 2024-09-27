let number = 5; // Assign any number here

if (number > 0) {
    console.log("the number is positive");// Output for positive numbers
} else if (number < 0) {
    console.log("the number is negative");// Output for negative numbers
} else {
    console.log("the number is 0");// Output for zero
}

let day = 5;
switch (day) {
    case 1:
        console.log("Monday");    // Output Sunday
        break;
    // Add more cases
    case 2:
        console.log("Tuesday");    // Output Sunday
        break;
    case 3:
        console.log("Wednesday");    // Output Sunday
        break;
    case 4:
        console.log("Thursday");    // Output Sunday
        break;
    case 5:
        console.log("Friday");    // Output Sunday
        break;
    case 6:
        console.log("Saturday");    // Output Sunday
        break;
    case 7:
        console.log("Sunday");    // Output Sunday
        break;
}
for (let i = 1; i <= 5; i++) {
    console.log(i);// Print i
}

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;// Print i and increment
}


let j = 1;

do {
    console.log(j);
    j++;// Print j j++; 
} while (j <= 5);

for (let i = 0; i <= 5; i++) {
    console.log(i);
    if (i === 3) {
        break;// Use Break here
    }
}


for (let i = 0; i <= 5; i++) {

    if (i === 3) {
        continue;// Use Break here

    }
    console.log(i);
}

let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
    // Access globalVar and localVar inside the function
}
scopeExample();
console.log(globalVar);
console.log(localVar);