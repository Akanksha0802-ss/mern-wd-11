// Sum of Digits
// Find the sum of the digits of a number using a loop



// let num = "244";
// let sum = 0
// for(let i=0; i<num.length; i++) {
//      let sum = sum + num%10;
//      console.log(sum);
// }


// let num = 244;
// let sum = 0;

// while(num>0)
// {
//     let rem=num%10;
//     sum = sum+rem;
//     num = num/10;
// }  
// console.log(sum);


let num = 244;
let sum = 0;

while(num>0)
{
    let rem=num%10;
    sum = sum+rem;
    num = Math.floor(num/10); //remove last digit
}  
console.log(sum);
