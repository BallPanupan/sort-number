let number = [9, 0, 3, 1, 3, 0, 4, 2, 7, 4];

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

function countNumber(number){
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
    return sNumber;
}

function pointNumber(locationNumner, maxNumber){
    let moveArray = [];
    moveArray[0] = 0;

    for (let index = 1; index < maxNumber+1; index++) {
        moveArray.push(locationNumner[index-1])
    }
    return moveArray;
}

function sortNumber(cNumber){
    let sortNumber = [];

    for (let index = 0; index < maxNumber+1; index++) {
        
        for (let index2 = 0; index2 < cNumber[index]; index2++) {
            sortNumber.push(index);
        }  
        
    }
    return sortNumber;
}


maxNumber = macNumber(number);
cNumber = countNumber(number);
locationNumner = sumNumber(cNumber);
pNumber = pointNumber(locationNumner);
sort = sortNumber(cNumber, pNumber);

console.log(sort);