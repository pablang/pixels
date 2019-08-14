
var setColorInput = document.querySelector('.set-color')
var setColorBtn = document.querySelector('.set-color-btn')
var brushBox = document.querySelector('.brush-box')
var squareDiv = document.querySelector('.square')

var handleClick = function(event) {
  event.preventDefault()
  brushBox.style.backgroundColor = setColorInput.value
}

setColorBtn.addEventListener('click', handleClick)

for (var i=0; i <= 3000; i++){
  var pixel = document.createElement('div')
  pixel.classList.add('pixel')
  squareDiv.appendChild(pixel)
}