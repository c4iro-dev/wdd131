const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0;i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

i = 0;
while ( i < studentReport.length) {        
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;    
}

studentReport.forEach(function(item) {
    if (item < LIMIT) {
        console.log(item);
    }    
});

// for (let index in studentReport) {
//     console.log(studentReport[index]);
// }

dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let days = 3;
let i = 0;
let today = new Date();
let day = today.getDay() + i;


while (i<days) {
i++;
let day = today.getDay() + i;
console.log(dayNames[day]);
}
