// return true if the array is sorted either  or descending
// consider there are no duplicated numbers

// [] => true
// [42] => true
// [39,42] => true
// [42, 39] => true
// [1,2,3,4,5] => true
// [5,4,3,2,1] => true
// [1,5,2] => false


function isSorted(array){
  let ascending = true
  let descending = true

  for (let i = 1; i < array.length; i++){
   if( array[i-1] > array[i]){
    ascending = false
   }
   if( array[i-1] < array[i]){
    descending = false
   }
  }
    return ascending || descending
}

console.log(isSorted([]))
console.log(isSorted([42]))
console.log(isSorted([39,42]))
console.log(isSorted([42, 39]))
console.log(isSorted([1,2,3,4,5]))
console.log(isSorted([5,4,3,2,1]))
console.log(isSorted([1,5,2]))
