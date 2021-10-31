let number = [1, 0, 3, 1, 3, 1];
let stackNumber = [];
let numberLocation = [];
let totleNumber = [];

//check max number 
function macNumber(number) {
    let maxNumber = [];
    for (let index = 0; index < number.length; index++) {
        maxNumber = number[index];
        for (let index2 = 0; index2 < number.length; index2++) {
            if(maxNumber < number[index2]){
                maxNumber = number[index2];
            }
        }
    }
    return maxNumber;
}

function countNumber(number, maxNumber){
    let counting = [];
    for (let index = 0; index < maxNumber+1; index++) {
        counting[index] = 0;
    
        for (let index2 = 0; index2 < number.length; index2++) {
            if(index == number[index2]){
                counting[index]++;
            }
        }
    }

    return counting;
}

function sumNumber(cNumber, maxNumber){
    let sNumber = [];
        sNumber[0] = cNumber[0];

    for (let index = 1; index < maxNumber+1; index++) {
        sNumber[index] = 0;  
        sNumber[index] = sNumber[index-1] + cNumber[index];

    }
    console.log(sNumber); 
    return sNumber;
}



maxNumber = macNumber(number);
// console.log("Max Number : ", maxNumber);

cNumber = countNumber(number, macNumber(number));
console.log(cNumber);

xxxxx = sumNumber(cNumber, maxNumber);
// console.log(xxxxx);





// numberLocation = stackNumber;
// console.log(stackNumber);

// for (let index = 0; index < maxNumber; index++) {
//     numberLocation[index+1] = stackNumber[index] + stackNumber[index+1]     
// }

// console.log(numberLocation);
