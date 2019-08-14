

var setColorInput = document.querySelector('.set-color')
var setColorBtn = document.querySelector('.set-color-btn')
var brushBox = document.querySelector('.brush-box')
var squareDiv = document.querySelector('.square')
var color = "blue"
for (var i=0; i < 3000; i++){
  var pixel = document.createElement('div')
  pixel.classList.add('pixel')
  squareDiv.appendChild(pixel)
}
var pixels = document.querySelectorAll('.pixel')

var handleClick = function(event) {
  event.preventDefault()
  brushBox.style.backgroundColor = setColorInput.value
  color = setColorInput.value
}

setColorBtn.addEventListener('click', handleClick)

var changeColor = function(event){
  event.target.style.backgroundColor = color
}

pixels.forEach(function(pixel) {
  pixel.addEventListener('click', changeColor)
})
