var inputs = document.querySelectorAll('input')
var userNameInput = document.querySelector('#userName');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var ctaBtn = document.querySelector('#ctaBtn')




// reset Functionality
function resetForm(){
    for(i=0;i<inputs.length;i++){
        inputs[i].value = ""
    }
}