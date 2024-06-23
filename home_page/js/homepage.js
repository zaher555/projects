/**********************************************************************logout****************************************************************************************/
let logoutLink=document.getElementById('logoutLink');
function logout()
{
    let loggin=JSON.parse(localStorage.removeItem("loggedin_user"))
    logoutLink.style.display='none'
}
/*********************************************************************slider****************************************************************************/
var imgSlider=document.getElementById('img-slider');
var imageSrc=['../images/pexels-lastly-699122.jpg','../images/pexels-karolina-grabowska-8092507.jpg','../images/pexels-nietjuh-934070.jpg','../images/pexels-sora-shimazaki-5926460.jpg']
window.onload=function()
{
    var i=0;
    var interval=setInterval(function(){
        i++;
        if(i==imageSrc.length)
        {
            i=0;
            imgSlider.setAttribute('src',imageSrc[i]);
        }
        else
        {
            imgSlider.setAttribute('src',imageSrc[i]);
        }
    },3000)
    /********************************************************************cart counter******************************************************************************************/
    var cartCounter=document.getElementById('counter');
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cartCounter.innerText=cart.length;
    /********************************************************************show email******************************************************************************************/
    var email=document.getElementById('user');
    let loggedin_user=JSON.parse(localStorage.getItem("loggedin_user"))
    if(loggedin_user != null)
    {
        email.innerText=loggedin_user.User_Email;
        logoutLink.style.display='inline-block'
    }
    else
    {
        logoutLink.style.display='none'
    }
}
/***********************************************************************to top*********************************************************************************/
var topArrow=document.getElementById('topArrow');
window.onscroll=function(){
    checkScroll();
}
function toTop()
{
    window.scrollTo(top)
}
function checkScroll()
{
    if (document.documentElement.scrollTop > 20) {
        topArrow.style.display = "block";
      } else {
        topArrow.style.display = "none";
      }
}
