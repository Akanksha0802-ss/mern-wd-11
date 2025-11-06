// Print Even Numbers
// Print all even numbers from 1 to 50 using a loop.



let remainder;

for(let i=1; i<=50; i++){
    remainder = i % 2;
    if(remainder === 0){
        console.log(`${i} is an even number`);
    }
}