const addBtn = document.querySelector('#add--button')
const addBtnAlt = document.querySelector('.insert__button')

addBtn.addEventListener('click', testFunction)

addBtnAlt.addEventListener('click', testFunction)

function testFunction(event) {
  event.preventDefault()
  console.log('Finally clicked')
}
