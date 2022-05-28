//A1: Converting Objects to Arrays

/*
    Write a function that converts an object into an array,
    where each element represents a key-value pair in the form of an array.
    toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
    toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
    toArray({}) ➞ []
    Return an empty array if the object is empty.
*/

console.log('\n' + 'A1: ')

const toArray = (object) => {
  let array = []
  for (var key in object) {
    array.push([key, object[key]])
  }
  return array
}

console.log(toArray({ a: 1, b: 2 }))
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray({}))

//A2: Upvotes vs Downvotes

/*
    Given an object containing counts of both upvotes and downvotes,
    return what vote count should be displayed.
    This is calculated by subtracting the number of downvotes from upvotes.
    getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
    getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
    getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
    You can expect only positive integers for vote counts.
*/

console.log('\n' + 'A2: ')

const getVoteCount = ({ upvotes, downvotes }) => {
  if (Number.isInteger(upvotes) && upvotes >= 0 && Number.isInteger(downvotes) && downvotes >= 0){
    return upvotes - downvotes
  }
  return 'Only positive integers are allowed'
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }))
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))

// A3: Word Endings

/*
    Create a function that adds a string ending to each member in an array.
    addEnding(["clever", "meek", "hurried", "nice"], "ly")
    ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
    addEnding(["new", "pander", "scoop"], "er")
    ➞ ["newer", "panderer", "scooper"]
    addEnding(["bend", "sharpen", "mean"], "ing")
    ➞ ["bending", "sharpening", "meaning"]
    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
*/

console.log('\n' + 'A3: ')

const addEnding = (array, suffix) => {
  return array.map((word) => word + suffix)
}

console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"))
console.log(addEnding(["new", "pander", "scoop"], "er"))
console.log(addEnding(["bend", "sharpen", "mean"], "ing"))

// A4: Get Sum of People's Budget

/*
    Create the function that takes an array with
    objects and returns the sum of people's budgets.
    getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
    ]) ➞ 65700
    getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
    ]) ➞ 62600
*/

console.log('\n' + 'A4: ')

const getBudgets = (array) => {
  let sum = 0
  array.forEach(function ({ budget }) {
    sum = sum + budget
  });
  return sum
}

console.log(getBudgets(
  [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]))
console.log(getBudgets(
  [
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]))

// A5: How Many Vowels? ~ BONUS

/*
    Create a function that takes a string and returns the number (count)
    of vowels contained within it.
    countVowels("Celebration") ➞ 5
    countVowels("Palm") ➞ 1
    countVowels("Prediction") ➞ 4
    a, e, i, o, u are considered vowels (not y).
    All test cases are one word and only contain letters.
*/

console.log('\n' + 'A5: ')

const countVowels = (string) => {
  let vowelsArray = string.match(/[aeiou]/gi)
  if(vowelsArray === null){
    return 0
  }
  return vowelsArray.length
}

console.log(countVowels("Celebration") )
console.log(countVowels("Palm"))
console.log(countVowels("Prediction"))
