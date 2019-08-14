
var setColorInput = document.querySelector('.set-color')
var setColorBtn = document.querySelector('.set-color-btn')
var brushBox = document.querySelector('.brush-box')

brushBox.style.backgroundColor = setColorInput.value

var handleClick = function(event) {
  event.preventDefault()
  brushBox.style.backgroundColor = setColorInput.value
  debugger
}

setColorBtn.addEventListener('click', handleClick)