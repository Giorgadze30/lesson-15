//N1

const currentDay = new Date().getDay()
switch (currentDay) {
    case 0:
        dayname = "Sunday";
        break;
    case 1:
        dayname = "Monday";
        break;
    case 2:
        dayname = "Tuesday";
        break;
    case 3:
        dayname = "Wednesday";
        break;
    case 4:
        dayname = "Thursday";
        break;
    case 5:
        dayname = "Friday";
        break;
    case 6:
        dayname = "Saturday";
        break;
}
console.log (dayname);

//N2

for ( let i=0; i<100; i++) {
    console.log (i);
}

//N3

let numbers = 0;
while (numbers<50) {
    console.log (numbers);
    numbers++;
}

//N4

let doIndex=0;
do {
    console.log (doIndex);
    doIndex++;
} while (doIndex<150)

//N5 

    const firstArray = [];
    let secondArray = 0;
    for (let i = 1; i <10000; i++) {
        secondArray = i * i 
        firstArray.push(secondArray);
    }
console.log (firstArray);

