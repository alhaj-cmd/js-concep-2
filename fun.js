// function addTo(num1, num2){
//     var num=num1+num2;
//    return(num)
// }
// var number = addTo(2,3);
// console.log(number)

// 2 odd number system

// function oddNum(num){
//     if(num % 2==0){
//       return('it is oddNum');
//     }
//     else{return('it is not oddNum')}
// }

// var sum =oddNum(45);
// console.log(sum);

//  3 switch case

// switch ('shop'){
// case('shop'):
// console.log('it is data');
// break;
// case('market'):
// console.log('It is market');
// break;
// default:
//     console.log('data not found!!')
// }

// 4 factorial no

function fac(n){
    let result = 1;
    let i = n;
    while(i>=1){
        result = result * i;
        i--;    
    }
    return result;
}
console.log(fac(4));