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
