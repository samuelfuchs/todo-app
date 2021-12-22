const addBtn = document.querySelector('#add--button')
let fieldText = document.getElementById('subdomain')

addBtn.addEventListener('click', testFunction)
fieldText.addEventListener('click', testFunction)

function testFunction(event) {
  event.preventDefault()
  console.log(fieldText.value)
}
