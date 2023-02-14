const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const a_password= document.getElementById('a_password');

//show input error messaage
function showError(input,message){
    const formControl  = input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success message
function showSuccess(input){
    const formControl  = input.parentElement;
    formControl.className='form-control success';
}

//Check Email is valid
function checkEmail(input){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  if(re.test(input.value.trim())){
    showSuccess(input);
  } else {
    showError(input,'Email is not valid');
  }
}

//Check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()==='')     {
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

//get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
}

//check Input length
function checkLength(input, min, max){
    if(input.value.length < min ){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else{
        showSuccess(input)
    }
}
//Check passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value != input2.value){
        showError(input2,'Password do not match');
    }
}

// event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    // ---Not preferable method it's lengthy and make code unsystematic---
    // if (username.value == ''){
    //     showError(username,'Username is required');
    // } else{
    //     showSuccess(username);
    // }
    // if (email.value == ''){
    //     showError(email,'Email is required');

    // } else if(!isValidEmail(email.value)){
    //     showError(email,'Email is not valid');
    // }
    // else{
    //     showSuccess(email);
    // }
    // if (password.value == ''){
    //     showError(password,'Password is required');
    // } else{
    //     showSuccess(password);
    // }
    // if (a_password.value == ''){
    //     showError(a_password,'Please confirm your password!');
    // } else{
    //     showSuccess(a_password);
    // }
    // ------------------------------------------------------------------------
    checkRequired([username, email, password,a_password]);
    checkLength(username, 3, 15);
    checkLength(password, 6,15);
    checkEmail(email);
    checkPasswordsMatch(password,a_password)
}); 