let EmailElement = document.querySelector('#Email');
console.log(EmailElement);
let messageElement = document.querySelector("#message");

let submitbutton = document.querySelector('#submit-button');
submitbutton.addEventListener('click', function(e) {
     e.preventDefault();
     
    let emailValue = EmailElement.value;
    let messageValue = messageElement.value;

    if(emailValue.includes('@')) {
    	//all good
    	alert('Thank you For your message!')
    } else{
    	alert('oops, please complete all fields!')};
                  
});
     
