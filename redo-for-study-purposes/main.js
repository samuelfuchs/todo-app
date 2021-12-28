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

// const inputValue = document.getElementById('myInput')
