// Grade Calculator
// Take a student's marks as input and print their grade using conditions:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// < 60: F

// let user = 50;
let user = 75; 

if( user >= 90 && user <=100) {
    console.log("A");
} else if(user >= 80 && user <= 89) {
    console.log("B");
} else if(user >= 70 && user <= 79) {
    console.log("C");
} else if(user >= 60 && user <= 69) {
    console.log("D");
}  else if(user < 60 ) {
    console.log("F");
}  