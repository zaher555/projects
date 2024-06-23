var nameInput=document.getElementById('name');
var phoneInput=document.getElementById('phone');
var emailInput=document.getElementById("email");
var passwordInput=document.getElementById("password");
var passwordConfirmationInput=document.getElementById("password-confirm");
var nameError=document.getElementById('nameError');
var phoneError=document.getElementById('phoneError');
var emailError=document.getElementById("emailError");
var passwordError=document.getElementById("passwordError");
var confirmError=document.getElementById("confirmationError");
var namePattern=/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}/gim;
var phonePattern=/^(010|015|012)[0-9]{8}/gim;
var emailPattern=/^[A-Za-z]{3,}\w{1,}@(yahoo|gmail).com$/gim;
var passwordPattern=/^(?=.*[A-Za-z])(?=.*\d).+$/gim;
var sumitBtn=document.getElementById('sumitBtn');
let users=[];
let loggedin_user={}
//***************************************************************name validation*********************************************************************/
function nameValidation()
{
    if(nameInput.value.length==0)
    {
        nameError.style.display='block';
        nameInput.style.border='1px solid red';
        nameError.innerText='Name is required'
    }
    else if(!nameInput.value.match(namePattern))
    {
        nameError.style.display='block';
        nameInput.style.border='1px solid red';
        nameError.innerText='Name must contain 3 parts of words'
    }
    else
    {
        nameError.style.display='none';
        nameInput.style.border='1px solid green';
    }
}
nameInput.addEventListener('input',nameValidation)
//**************************************************************phone validation**********************************************************************/
function phoneValidation()
{
        if(phoneInput.value.length==0)
        {
            phoneError.style.display='block';
            phoneInput.style.border='1px solid red';
            phoneError.innerText='Phone is required'
        }
        else if(!phoneInput.value.match(phonePattern))
        {
            phoneError.style.display='block';
            phoneInput.style.border='1px solid red';
            phoneError.innerText='Phone must match this pattern [010 | 012 | 015] and eleven number'
        }
        else
        {
            phoneError.style.display='none';
            phoneInput.style.border='1px solid green';
        }
}
phoneInput.addEventListener('input',phoneValidation)
//**************************************************************email validation**********************************************************************/
function emailValidation()
{
    if(emailInput.value.length==0)
    {
        emailError.style.display='block';
        emailInput.style.border='1px solid red';
        emailError.innerText='Email is required'
    }
    else if(!(emailInput.value).match(emailPattern))
    {
        emailError.style.display='block';
        emailError.innerText='Email must match this patten [abc@gmail.com]'; 
        emailInput.style.border='1px solid red';
    }
    else
    {
        emailInput.style.border='1px solid green';
        emailError.style.display='none';
    }
}
emailInput.addEventListener('input',emailValidation)
//*************************************************************password validation**************************************************************************/
function passwordValidation()
{
    if(passwordInput.value.length==0)
    {
        passwordError.style.display='block';
        passwordInput.style.border='1px solid red';
        passwordError.innerText='password is required'
    }
    else if(passwordInput.value.length>0 && passwordInput.value.length<8) //still
    {
        passwordError.style.display='block';
        passwordError.innerText='password must contain 8 charcters or more';
        passwordInput.style.border='1px solid red';
    }
    else if(!passwordInput.value.match(passwordPattern))
    {
        passwordError.style.display='block';
        passwordError.innerText='password must contain letters and numbers';
        passwordInput.style.border='1px solid red';
    }
    else
    {
        passwordInput.style.border='1px solid green';
        passwordError.style.display='none';
    }
}
passwordInput.addEventListener('input',passwordValidation)
//*************************************************************password confirmation validation**************************************************************************/
function confirmPasswordValidation()
{
    if(passwordConfirmationInput.value.length==0)
    {
        confirmError.style.display='block';
        passwordConfirmationInput.style.border='1px solid red';
        confirmError.innerText='password confirmation is required'
    }
    else if(passwordConfirmationInput.value.length>0 && passwordConfirmationInput.value !=passwordInput.value)   //still
    {
        confirmError.style.display='block';
        confirmError.innerText='confirmation must match password';
        passwordConfirmationInput.style.border='1px solid red';
    }
    else
    {
        passwordConfirmationInput.style.border='1px solid green';
        confirmError.style.display='none';
    }
}
passwordConfirmationInput.addEventListener('input',confirmPasswordValidation)
//********************************************************************submit*******************************************************************************************/
sumitBtn.addEventListener('click',function(e){
        let users=JSON.parse(localStorage.getItem("users")) || []
        if(nameInput.value.length == 0 || !nameInput.value.match(namePattern) || phoneInput.value.length ==0 || !phoneInput.value.match(phonePattern) || emailInput.value.length == 0 || !emailInput.value.match(emailPattern) || passwordInput.value.length == 0 || !passwordInput.value.match(passwordPattern) || passwordConfirmationInput.value.length == 0 || passwordConfirmationInput.value != passwordInput.value)
        {
            e.preventDefault()
            nameValidation();
            emailValidation();
            phoneValidation();
            passwordValidation();
            confirmPasswordValidation()
        }
        else
        {
            if(users.length==0)
            {
                users.push({userName:nameInput.value,phone:phoneInput.value,email:emailInput.value,password:passwordInput.value});
                localStorage.setItem("users",JSON.stringify(users));
                loggedin_user={User_Email:emailInput.value,password:passwordInput.value};
                localStorage.setItem("loggedin_user",JSON.stringify(loggedin_user));
            }
            else if(users.length != 0)
            {
                for(let i=0;i<users.length;i++)
                {
                    if(users[i].email === emailInput.value || users[i].password === passwordInput.value || users[i].phone === phoneInput.value)
                    {
                        e.preventDefault();
                        alert('these data has been taken before')
                        return 0;
                    }
                }
                users.push({userName:nameInput.value,phone:phoneInput.value,email:emailInput.value,password:passwordInput.value});
                localStorage.setItem("users",JSON.stringify(users));
                loggedin_user={User_Email:emailInput.value,password:passwordInput.value};
                localStorage.setItem("loggedin_user",JSON.stringify(loggedin_user));
                return 1;
            }
    }

})