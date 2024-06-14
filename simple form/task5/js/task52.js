var nameInput=document.getElementById('name');
var emailInput=document.getElementById('email');
var passwordInput=document.getElementById('password');
var nameError=document.getElementById('nameerror');
var emailError=document.getElementById('emailerror');
var passwordError=document.getElementById('passworderror');
var genderError=document.getElementById('gendererror');
var checkError=document.getElementById('sporterror');
var emailPattern=new RegExp(/^\w{3,}@(gmail|yahoo).(com|net)$/);
var radio=document.getElementsByClassName('radio-button');
var check=document.getElementsByClassName('check');
var country=document.getElementById('country');
var countryError=document.getElementById('countryerror');
/**********************************************************************************************************************************************/
function nameInputCheck()
{
        if(nameInput.value.length==0)
         {
             nameError.style.display='block'
             nameInput.style.border='4px solid red'
         }
         else
         {
             nameError.style.display='none'
             nameInput.style.border='4px solid green'
         }
}
nameInput.addEventListener('input',function(){
    nameInputCheck();
})
/********************************************************************************************************************************************* */
function emailInputCheck()
{
    if(emailInput.value.length==0)
        {
            emailError.innerText='email is required'
            emailError.style.display='block'
            emailInput.style.border='4px solid red'
        }
        else if((emailPattern.test(String(emailInput.value)))==false)
        {
            emailError.innerText='Invalid Email';
            emailError.style.display='block';
            emailInput.style.border='4px solid red'
        }
        else if(emailInput.value.length!=0 && (emailPattern.test(String(emailInput.value)))==true)
        {
            emailError.style.display='none';
            emailInput.style.border='4px solid green'
        }
}
emailInput.addEventListener('input',function(){
    emailInputCheck();
})
/**********************************************************************************************************************************************/
function passwordInputCheck()
{
    if(passwordInput.value.length==0)
        {
            passwordError.style.display='block'
            passwordInput.style.border='4px solid red'
        }
        else if(passwordInput.value.length!=0 && passwordInput.value.length<8)
        {
            passwordError.innerText='password must be 8 charcters at least'
            passwordError.style.display='block'
            passwordInput.style.border='4px solid red'
        }
        else if(passwordInput.value.length>=8)
        {
            passwordError.style.display='none'
            passwordInput.style.border='4px solid green'
        }
}
passwordInput.addEventListener('input',function(){
    passwordInputCheck();
})
/**********************************************************************************************************************************************/
radio[0].addEventListener('click',function(){
    radio[1].classList.remove('active');
    radio[0].classList.add('active');
    genderError.style.display='none';
})
radio[1].addEventListener('click',function(){
    radio[0].classList.remove('active');
    radio[1].classList.add('active');
    genderError.style.display='none';
})
/**********************************************************************************************************************************************/
function genderInputCheck()
{
        if(radio[0].classList.contains('active')==true || radio[1].classList.contains('active')==true)
        {
            genderError.style.display='none';
        }
        else if(radio[0].classList.contains('active')==false || radio[1].classList.contains('active')==false)
        {
            genderError.style.display='block';
        }
}
radio[0].addEventListener('input',function(){
    genderInputCheck();
})
radio[1].addEventListener('input',function(){
    genderInputCheck();
})
/**********************************************************************************************************************************************/
check[0].addEventListener('click',function(){
    check[0].classList.toggle('active');
})
check[1].addEventListener('click',function(){
    check[1].classList.toggle('active');
})
check[2].addEventListener('click',function(){
    check[2].classList.toggle('active');
})
/******************************************************************************************************************************************** */
function sportInputCheck()
{
    let counter=0;
    for(var i=0;i<check.length;i++)
    {
        if(check[i].classList.contains('active')==true)
        {
            ++counter;
        }
    }
    if(counter<2)
    {
        checkError.style.display='block';
    }
    else if(counter>=2)
    {
        checkError.style.display='none';
    }
}
check[0].addEventListener('input',function(){
    sportInputCheck();
})
check[1].addEventListener('input',function(){
    sportInputCheck();
})
check[2].addEventListener('input',function(){
    sportInputCheck();
})
/**********************************************************************************************************************************************/
function countryInputCheck()
{
    if(country.value==0)
        {
            countryError.style.display='block'
            country.style.border='4px solid red'
        }
        else
        {
            countryError.style.display='none'
            country.style.border='4px solid green'
        }
}
country.addEventListener('input',function(){
    countryInputCheck();
})
/**********************************************************************************************************************************************/
function submitFunc()
{
    nameInputCheck();
    emailInputCheck();
    passwordInputCheck();
    genderInputCheck();
    sportInputCheck();
    countryInputCheck();
}
/***********************************************************************************************************************************************/
function emptyForm()
{
    nameInput.value='';
    emailInput.value='';
    passwordInput.value='';
    for(let i=0;i<radio.length;i++)
    {
        if(radio[i].classList.contains('active')==true)
        {
            radio[i].checked=false;
        }
    }
    for(let z=0;z<check.length;z++)
    {
        if(check[z].classList.contains('active')==true)
        {
            check[z].checked=false;
        }
    }
    country.value=0;
}
