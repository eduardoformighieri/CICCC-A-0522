let ul = document.querySelector('#list')

document.getElementById('add-btn').addEventListener('click', function(e){
    e.preventDefault();

    let addInput = document.getElementById('add-input')

    if(addInput.value !== ''){

        var li = document.createElement('li'),
            firstP = document.createElement('p'),
            secondP = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input')

        firstIcon.className = "fa fa-pencil-square-o"
        secondIcon.className = "fa fa-times"
        input.className = "edit-note"
        input.setAttribute("type", "text")


        firstP.textContent = addInput.value


        secondP.appendChild(firstIcon)
        secondP.appendChild(secondIcon)
        li.appendChild(firstP)
        li.appendChild(secondP)
        li.appendChild(input)
        ul.appendChild(li)

        addInput.value = ''
    }
})


ul.addEventListener('click', function(e){

    if(e.target.classList[1] === 'fa-pencil-square-o'){

        let parentP = e.target.parentNode
        parentP.style.display = 'none'

        let note = parentP.previousElementSibling
        let input = parentP.nextElementSibling

        input.style.display = "block"
        input.value = note.textContent

        input.addEventListener('keypress', function(e){

            if(e.keyCode === 13){

                if(input.value !== ''){
                    note.textContent = input.value
                    parentP.style.display = 'block'
                    input.style.display = 'none'
                }else {
                    parentP.style.display = 'block'
                    input.style.display = 'none'
                }
            }
        })

    }

    if(e.target.classList[1] === 'fa-times'){
        const list = e.target.parentNode.parentNode
        list.parentNode.removeChild(list)
    }
})

const hideItem = document.getElementById('hide')
hideItem.addEventListener('click', function(){

    const label = document.querySelector('label')
    
    if(this.checked){
        label.textContent = 'Unide Notes'
        ul.style.display = 'none'
    }else{
        label.textContent = 'Hide Notes'
        ul.style.display = 'block'
    }
})
const searchInput = document.querySelector("#search-note input")
searchInput.addEventListener('keyup', function(e){

    const searchChar = e.target.value.toLowerCase()

    const notes = ul.getElementsByTagName('li')

    Array.from(notes).forEach(function(note){

        const parText = note.firstElementChild.textContent

        if(parText.toLowerCase().indexOf(searchChar) !== -1){
            note.style.display = 'block'
        }else{
            note.style.display = 'none'
        }
    })
})