const addBtn = document.querySelector('#add--button')
const fieldText = document.getElementById('subdomain')

const listUl = document.querySelector('.task__list__ul')

addBtn.addEventListener('click', testFunction)
listUl.addEventListener('click', clickedFunction)

function testFunction(event) {
  event.preventDefault()

  if (fieldText.value == '') {
    alert('The field is empty')
  } else {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode('Four'))
    listUl.appendChild(li)
  }
}

function generateItem() {}

// =======================
function clickedFunction() {
  console.log('this item was clicked')
}
