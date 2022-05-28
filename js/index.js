var headLine = document.querySelector('#headline');
var inputs = document.querySelectorAll('input')
var userNameInput = document.querySelector('#userName');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var ctaBtn = document.querySelector('#ctaBtn')
var signUpTxt = document.querySelector('#signUpTxt');
var signUp = document.querySelector('#signUpTxt a');
var signInTxt = document.querySelector('#signInTxt');
var signIn = document.querySelector('#signInTxt a');



var isAccount = true;
var currentStatus = "";


var accounts = [];

if(JSON.parse(localStorage.getItem("accounts"))!= null){
    accounts = JSON.parse(localStorage.getItem("accounts"));

}else{
    accounts = [];
}

// CTA event
ctaBtn.addEventListener("click",function(){

    if (ctaBtn.textContent == "Sign Up") {
        signup()
        resetForm()
    }else if (ctaBtn.textContent == "Log In") {
       login()
       resetForm()
    }
    
})


// check if  is already exist
function isMAilExist(){  
    for (var i = 0; i < accounts.length; i++) {
        if(accounts[i].email == emailInput.value){
            return false
        }
        
    }
 }

// check if mail is empty
 function isEmpty(){  
    if(emailInput.value == "" || passwordInput.value == ""){
        return false
    }
        
 }

 // check if mail and password matches accounts database
 function isMAilAndPassCorrect(){  
    for (var i = 0; i < accounts.length; i++) {
        if(accounts[i].email == emailInput.value && accounts[i].password == passwordInput.value){
            return true
        }
        
    }
 }

// signup Logic
function signup() {
    if (isMAilExist() == false) {
        alert("mail already exists , try login inestead")
    }else if(isEmpty() == false){
        alert("mail or password cant be empty")
    }else{
        createAccount()
        alert("account created successfully")
    }
 }


// login Logic
function login() {
    if(isEmpty() == false){
        alert("mail or password cant be empty")
    }else if(isMAilAndPassCorrect() == true){
        alert("logged in successfully")
    }else{
        alert("mail or password is incorrect")
    }
}



// Create Logic
function createAccount(){
    var accountDetails = {
        userName:userNameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    accounts.push(accountDetails)
    
    localStorage.setItem("accounts",JSON.stringify(accounts));
}


// Display Logic
function displayForm(){
    if (isAccount) {
        currentStatus = "Log In"
        headLine.innerHTML = currentStatus;
        ctaBtn.innerHTML = currentStatus;

        userNameInput.classList.replace("d-block","d-none")
        signUpTxt.classList.replace("d-none","d-block")
        signInTxt.classList.replace("d-block","d-none")
    }else {
        currentStatus = "Sign Up"
        headLine.innerHTML = currentStatus;
        ctaBtn.innerHTML = currentStatus;

        userNameInput.classList.replace("d-none","d-block")
        signUpTxt.classList.replace("d-block","d-none")
        signInTxt.classList.replace("d-none","d-block")
    }
}
displayForm()

// sign up btn logic
signUp.addEventListener("click",function(){
    resetForm()
    isAccount = false;
    displayForm();
})

// sign in btn logic
signIn.addEventListener("click",function(){
    resetForm()
    isAccount = true;
    displayForm();
})

// reset logic
function resetForm(){
    for(i=0;i<inputs.length;i++){
        inputs[i].value = ""
    }
}