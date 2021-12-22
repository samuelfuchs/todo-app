const addBtn = document.querySelector('#add--button')
let fieldText = document.getElementById('subdomain')

addBtn.addEventListener('click', testFunction)

function testFunction(event) {
  event.preventDefault()

  if (fieldText.value == '') {
    alert('The field is empty')
  }
}
