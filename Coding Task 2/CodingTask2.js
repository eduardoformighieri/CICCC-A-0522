/*
*******CODING TASK No 2**********
1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2,
    with the following values:
    a. John, 47, 46
    b. Bob, 23, 24
    c. Nick, 40, 35
    d. Alex, 44, 45
2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant
    to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees
3. Create function which will calculate total score (score1 + score2) for each student.
4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student
    has passed an exam and what kind of degree he has got.
5. Display the final result in console.
*/

const studentsData = [
  {
    name: 'John',
    score1: 47,
    score2: 46,
  },
  {
    name: 'Bob',
    score1: 23,
    score2: 24,
  },
  {
    name: 'Nick',
    score1: 40,
    score2: 35,
  },
  {
    name: 'Alex',
    score1: 44,
    score2: 45,
  },
]

const degreesData = ['A', 'B', 'C', 'D', 'E']
const limitsData = [91, 81, 71, 61, 51]

function calculateTotal (score1, score2){
  return score1 + score2
}

function displayFinalResults (students, degrees, limits) {
  students.map((student)=> {
    const total = calculateTotal(student.score1, student.score2)
    if (total >= limits[0]) console.log('The degree of ' + student.name + ' is ' + degrees[0])
    else if (total >= limits[1]) console.log('The degree of ' + student.name + ' is ' + degrees[1])
    else if (total >= limits[2]) console.log('The degree of ' + student.name + ' is ' + degrees[2])
    else if (total >= limits[3]) console.log('The degree of ' + student.name + ' is ' + degrees[3])
    else console.log('The degree of ' + student.name + ' is ' + degrees[4])
  })
}

displayFinalResults(studentsData, degreesData, limitsData)
