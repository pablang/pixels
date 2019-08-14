

var setColorInput = document.querySelector('.set-color')
var setColorBtn = document.querySelector('.set-color-btn')
var brushBox = document.querySelector('.brush-box')
var squareDiv = document.querySelector('.square')
var color = "blue"
var movieBtn = document.querySelector('.movie-form button')
var movieInput = document.querySelector(".movie-form input")
var background = ''


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

var getMovie = function(event){
  event.preventDefault()
  var search = movieInput.value
  var options = {
    url: `http://www.omdbapi.com/?t=${search}&apikey=2f6435d9`
  }
  $.ajax(options).done(function(resp){
    background = resp.Poster
    squareDiv.style.background = url(background)
  })

}

movieBtn.addEventListener('click', getMovie)
