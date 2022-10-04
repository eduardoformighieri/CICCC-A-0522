const URL = "https://gist.githubusercontent.com/Aliendroid8045/b09f9ac24273b6fd8e5184bdf1d3a62e/raw/c0fbbe02a3973477f3e18fdf16cb9b1a7f979f6a/Animal.Json"

let counter = 0
let animalData = []
let animalLen = 0

const request = new XMLHttpRequest()

/**
 * GET --> to get data
 * POST --> send new data
 * PUT/PATCH --> to update an existing data
 * DELETE --> to delete a data
 */
const btn = document.getElementById("btn")
const animalContainer = document.getElementById("animal-info")

window.addEventListener('load', function(){

    request.open("GET", URL)
    request.onload = function(){
        // const data = JSON.parse(request.responseText)
        // console.log(data)
        // renderHTML(data)
        animalData = JSON.parse(request.responseText)
    }
    request.send()
})

btn.addEventListener('click', function(){
    renderHTML(animalData)
    counter++
})

function renderHTML(data){

    let htmlString = ""
    // for(let i=0; i<data.length;i++){
    //     htmlString += `<p>${data[i].name} is a/an ${data[i].species}</p>`
    // }
    htmlString += `<p>${data[counter].name} is a/an ${data[counter].species}</p>`

    animalContainer.insertAdjacentHTML('beforeend', htmlString)

}