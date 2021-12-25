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
    fieldText
  }
}

function generateItem() {}

// =======================
function clickedFunction() {
  console.log('this item was clicked')
}
