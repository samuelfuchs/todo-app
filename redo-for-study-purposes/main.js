// add close button
const liList = document.getElementsByTagName('li')
for (i = 0; i < liList.length; i++) {
  const closeBtn = document.createElement('span')
  const x = document.createTextNode('\u00D7')
  closeBtn.appendChild(x)
  closeBtn.className = 'close'
  liList[i].appendChild(closeBtn)
}

// close button hides elements
const close = document.getElementsByClassName('close')
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement
    div.style.display = 'none'
  }
}

// check-functionality
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

// add new tasks
const add = document.querySelector('.addBtn')

add.addEventListener('click', function () {
  const li = document.createElement('li')
  const inputText = document.getElementById('myInput').value
  const liText = document.createTextNode(inputText)

  li.appendChild(liText)
  if (inputText === '') {
    alert('you must write something')
  } else {
    document.getElementById('ulTask').appendChild(li)
  }
  document.getElementById('myInput').value = ''

  const span = document.createElement('span')
  const x = document.createTextNode('\u00D7')
  span.className = 'close'
  span.appendChild(x)
  liList[i].appendChild(span)

  close[i].onclick = function () {
    const div = this.parentElement
    div.style.display = 'none'
  }
})
