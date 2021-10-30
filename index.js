let number = [1, 0, 3, 1, 3, 1];
let stackNumber = [];
let maxNumber = 0;
let numberLocation = [];
let totleNumber = [];
//check max number 

for (let index = 0; index < number.length; index++) {
    maxNumber = number[index];
    for (let index2 = 0; index2 < number.length; index2++) {
        if(maxNumber < number[index2]){
            maxNumber = number[index2];
        }
        
    }
}

for (let index = 0; index < maxNumber+1; index++) {
    stackNumber[index] = 0;

    for (let index2 = 0; index2 < number.length; index2++) {
        if(index == number[index2]){
            stackNumber[index]++;
        }
    }
    
    // break;
  
}

numberLocation = stackNumber;
console.log(stackNumber);

for (let index = 0; index < maxNumber; index++) {
    numberLocation[index+1] = stackNumber[index] + stackNumber[index+1]     
}

console.log(numberLocation);
