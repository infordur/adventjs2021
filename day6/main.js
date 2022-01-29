function sumPairs(numbers, result) {
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        let neededNumber = result - number;
        let neededNumberIndex = numbers.indexOf(neededNumber);
        
        if((neededNumberIndex !== -1) && (neededNumberIndex !== index)) {
            return [number, neededNumber];
        }
    }

    return null;
}


console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]