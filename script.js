let rightBox = document.querySelector('#rightBox')


let eventObject = {
    title: '',
    date: '',
    categories: '',
    description: ''
}

function eventSubmitHandler(event) {
    event.preventDefault()
    // storing data in object
    eventObject.title = event.target.title.value;
    eventObject.date = event.target.date.value;
    eventObject.categories = event.target.categories.value
    eventObject.description = event.target.description.value


    // creating card

    let eachList = document.createElement('div')
    eachList.classList.add('eachList')
    // console.log(eachList)


    eachList.innerHTML = ` <p>${eventObject.title}</p>
                 <p>${eventObject.date}</p>
                <p>${eventObject.description}</p>
                  <p>${eventObject.categories}</p>
              <span class="delBtn" onclick='deleteHandler(this)'>&#10005;</span>`




    console.log(eachList)

    rightBox.append(eachList)





    // console.log(eventObject)


}

function deleteHandler(btn){
    btn.parentElement.remove()

}