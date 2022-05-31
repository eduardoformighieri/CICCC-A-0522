const binarySearch = (array, numberToFind) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer <= rightPointer) {
    let midPointer = Math.floor((leftPointer + rightPointer) / 2);

    if (array[midPointer] === numberToFind) {
      return midPointer;
    }

    if (numberToFind < array[midPointer]) {
      rightPointer = midPointer - 1;
    } else {
      leftPointer = midPointer + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],9))
console.log(binarySearch([10,20,30,40,50,60,70,80,90,100],99))
