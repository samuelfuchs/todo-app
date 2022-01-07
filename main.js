// add "x" button for all existing li-elements
const taskList = document.getElementsByTagName('li')
for (i = 0; i < taskList.length; i++) {
  const span = document.createElement('span')
  const x = document.createTextNode('\u00D7')
  span.className = 'close'
  span.appendChild(x)
  taskList[i].appendChild(span)
}

// x-button hides content
const close = document.getElementsByClassName('close')
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement
    div.style.display = 'none'
  }
}

// Check items
const ul = document.querySelector('ul')
ul.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
    }
  },
  false
)

// add button - create new item to list
const add = document.querySelector('.addBtn')

add.addEventListener('click', function () {
  const li = document.createElement('li'),
    getInput = document.getElementById('fieldInput').value,
    inputText = document.createTextNode(getInput)

  li.appendChild(inputText)
  if (getInput === '') {
    alert('You must type something')
  } else {
    document.getElementById('taskUl').appendChild(li)
  }
  document.getElementById('fieldInput').value = ''

  const span = document.createElement('span')
  const x = document.createTextNode('\u00D7')
  span.className = 'close'
  span.appendChild(x)
  taskList[i].appendChild(span)

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement
      div.style.display = 'none'
    }
  }
})

const inputField = document.getElementById('fieldInput')

inputField.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    document.querySelector('.addBtn').click()
  }
})
