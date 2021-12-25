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

    li.appendChild(document.createTextNode(fieldText.value))
    li.classList.add('task__list__li')

    buttonAdd.classList.add('button')
    buttonDel.classList.add('button')

    listUl.appendChild(li)
    li.appendChild(div).appendChild(buttonAdd)
    div.appendChild(buttonDel)
  }
}

function generateItem() {}

// ===== helper func =====
function clickedFunction() {
  console.log('this item was clicked')
}
