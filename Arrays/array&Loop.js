let arrayToSort = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]


function answer(arrayFromAbove) {
    let temporaryArray = [];
    let finalArray = [];
    let sortedArray = arrayFromAbove.sort((a, b) => a - b);
    for (let i = 0; i < sortedArray.length; i ++) {
        temporaryArray.push(sortedArray[i]);
      if (sortedArray[i] !== sortedArray[i + 1]) {
          if (temporaryArray.length > 1) {
              finalArray.push(temporaryArray);
          } else {
        finalArray.push(temporaryArray[0]);
          }
        temporaryArray = [];
    }
    }
    return finalArray;
}

answer(arrayToSort);

