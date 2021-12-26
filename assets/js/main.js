const addBtn = document.querySelector('#add--button')
const fieldText = document.getElementById('subdomain')

const listUl = document.querySelector('.task__list__ul')

addBtn.addEventListener('click', testFunction)
listUl.addEventListener('click', clickedFunction)

// === adding new tasks ===
function testFunction(event) {
  event.preventDefault()

  if (fieldText.value == '') {
    alert('The field is empty')
  } else {
    const li = document.createElement('li')
    const div = document.createElement('div')
    const buttonAdd = document.createElement('button')
    const buttonDel = document.createElement('button')
    const iAdd = document.createElement('i')
    const iDel = document.createElement('i')

    li.appendChild(document.createTextNode(fieldText.value))
    li.classList.add('task__list__li')

    buttonAdd.classList.add('add__button')
    buttonDel.classList.add('delete__button')

    iAdd.classList.add('fas')
    iAdd.classList.add('fa-check-square')
    iDel.classList.add('fas')
    iDel.classList.add('fa-minus-square')

    listUl.appendChild(li)
    li.appendChild(div).appendChild(buttonAdd)
    div.appendChild(buttonDel)
    buttonAdd.appendChild(iAdd)
    buttonDel.appendChild(iDel)
  }
}

// ===== helper func =====
function clickedFunction() {
  console.log('this item was clicked')
}
