let arrayToSort = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]


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

// output [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]



let arrayAndString = [1,2,4,"4",591,"10",10,392,391,2,"2",5,"10",2,1,1,1,20,20]

function answer2(arrayFromAbove) {
  let temporaryArray = [];
  let finalArray = [];

  // Sort numbers before strings, and each group in ascending order
  let sortedArray = arrayFromAbove.slice().sort((a, b) => {
    if (typeof a === typeof b) return a > b ? 1 : -1;
    return typeof a === "number" ? -1 : 1;
  });

  for (let i = 0; i < sortedArray.length; i++) {
    temporaryArray.push(sortedArray[i]);

    let next = sortedArray[i + 1];
    let current = sortedArray[i];

    let isSame = current === next && typeof current === typeof next;

    if (!isSame) {
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

answer2(arrayAndString);

//output  [[1, 1, 1, 1], [2, 2, 2], 4, 5,10, [20, 20], 391,392,591, ['10', '10'], "2","4"]
