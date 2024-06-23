var emailInput=document.getElementById("email");
var passwordInput=document.getElementById("password");
var emailError=document.getElementById("emailError");
var passwordError=document.getElementById("passwordError");
var emailPattern=/^[A-Za-z]{3,}\w{1,}@(yahoo|gmail).com$/gim;
var passwordPattern=/^(?=.*[A-Za-z])(?=.*\d).+$/gim;
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
//*********************************************************login******************************************************************************************************/
var loginBtn=document.getElementById('loginBtn');
loginBtn.addEventListener('click',function(e){
let storage=JSON.parse(localStorage.getItem("users")) || [];
    emailValidation();
    passwordValidation();
    if(storage.length == 0)
    {
        e.preventDefault();
        alert("This Account Is Not Exist")
    }
    else if (emailInput.value.length == 0 || !(emailInput.value).match(emailPattern) || passwordInput.value.length ==0 || !passwordInput.value.match(passwordPattern))
    {
        e.preventDefault();
    }
    else if(storage.length !=0)
    {
        for(let i=0;i<storage.length;i++)
        {
            if(storage[i].email === emailInput.value && storage[i].password === passwordInput.value)
            {
                let logginUser=JSON.parse(localStorage.getItem("loggedin_user"));
                let loggin={User_Email:emailInput.value,password:passwordInput.value};
                localStorage.setItem("loggedin_user",JSON.stringify(loggin));
                return 0;
            }
        }
            e.preventDefault();
            alert("This Account Is Not Exist");
            return 1;
    }
})
