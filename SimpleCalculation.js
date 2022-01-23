function findCalculationTarget(numbers, target) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(numbers[i]!=numbers[j]){
                if((numbers[i]+numbers[j])==target){
                    result = [i, j].sort((a, b) => a - b);
                    break;
                }
            }
        }
    }
    return result;
}