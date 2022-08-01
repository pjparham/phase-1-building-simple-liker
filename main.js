// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// let modal = document.querySelector('.hidden')
const errorMessage = document.getElementById('modal');
// errorMessage.hidden = true;
// document.getElementById('modal').hidden = true





function likeResponse() {
  // console.log(heartButtons)
  const heartButtons = document.querySelectorAll('span.like-glyph');

  heartButtons.forEach(heartEvents); //forEach allows us to call a single function on multiple elements 

  function heartEvents(heartButton){
    heartButton.addEventListener('click', (e) => {
      mimicServerCall()
      .then((response) => {
        if (e.target.innerText === EMPTY_HEART){
          e.target.innerText = FULL_HEART
          e.target.classList.add("activated-heart")
        }
        else if (e.target.innerText === FULL_HEART){
          e.target.innerText = EMPTY_HEART
          e.target.classList.remove("activated-heart")
        }
      })
      .catch(() => {
        errorMessage.classList.remove("hidden")
        alert('Something went wrong!')
        setTimeout(() => errorMessage.classList.add("hidden"), 3000)
      })
      // console.log('I was clicked by heartEvents')

    })
  }
}

//   for (var i = 0; i < heartButtons.length; i += 1){ 
//     heartButtons[i].addEventListener('click', function(){
//       console.log("I was clicked...")
//       mimicServerCall()
//     })
//   }
// }
likeResponse()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
    // console.log('server call')
  });
}
//event listeners need a callback function as second argument
// i need to make a for loop to iterate through the array like object of hearts to add the event listener to each one