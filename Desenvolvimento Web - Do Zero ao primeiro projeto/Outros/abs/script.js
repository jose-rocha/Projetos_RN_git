// let dummy = [
//     {id: 1, name: 'José', amount: -60},
//     {id: 2, name: 'Leão', amount: -70},
//     {id: 1, name: 'Rocha', amount: 150}    
// ];

// let add = plus => {
//     let operatorCondition  = plus.amount < 0 ? '-' : '+';
//     console.log(operatorCondition);
    
//     console.log(Math.abs(plus.amount));
// }

// add(dummy[0]) 
// add(dummy[1]) 
// add(dummy[2]) 

let N = 25
let numbers = [1, 2, 3, 4, 5, 6, N, 2];



 let sums = numbers.reduce((accumulator, sum)=> accumulator + sum, 0);

 console.log(sums)






