// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeBtns = document.querySelectorAll('footer ul li span')
  likeBtns.forEach((heart)=>{
    heart.addEventListener('click',(event)=>{
      mimicServerCall()
      .then((res)=>{
        const heartIcon = event.target
        console.log('heartIcon',heartIcon)  
        console.log('heart', heart)
        if(heartIcon.textContent === EMPTY_HEART){
          //change the heart to a full heart
          heartIcon.textContent = FULL_HEART
          //add .activated-heart class to make the heart appear red
          heartIcon.className = 'activated-heart'
        }else{
          heartIcon.textContent = EMPTY_HEART
          heartIcon.classList.remove('activated-heart')
        }
    
    
      })
      .catch((error)=>{
        const errorElement = document.querySelector('#modal')
        errorElement.classList.remove('hidden')
        const messageElement = errorElement.querySelector('#modal-message')
        messageElement.textContent = error
        setTimeout(()=>{
          errorElement.setAttribute('class', 'hidden')
        }, 3000)
      })
    })
  })



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
  });
}
