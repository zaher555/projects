var img=document.getElementById('img');
var imgArr=['../part2/images/1.jpg','../part2/images/2.jpg','../part2/images/3.jpg','../part2/images/4.jpg'];
var button2=document.getElementById('btn2');
var button3=document.getElementById('btn3');
/************************************************************************************************************ */
//repeat motion
var i=0;
var interval=setInterval(function(){
    i++;
    if(i==imgArr.length)
    {
        i=0;
        img.setAttribute('src',imgArr[i]);
    }
    else
    {
        img.setAttribute('src',imgArr[i]);
    }
},5000)

/************************************************************************************************************ */
//move left
function toLeft()
{
    if(i==0)
    {
        i=imgArr.length-1;
        img.setAttribute('src',imgArr[i])
    }
    else
    {
        i--;
        img.setAttribute('src',imgArr[i]);
    }
}
/************************************************************************************************************ */
//resume
var interval2;
function play()
{
    button2.classList.add('border')
    button3.classList.remove('border')
    interval2=setInterval(function(){
    i++;
    if(i==imgArr.length)
    {
        i=0;
        img.setAttribute('src',imgArr[i]);
    }
    else
    {
        img.setAttribute('src',imgArr[i]);
    }
},3000)
}
/************************************************************************************************************ */
//pause
function stop()
{
    button3.classList.add('border');
    button2.classList.remove('border');
    clearInterval(interval);
    clearInterval(interval2);
}
/************************************************************************************************************ */
//move right
function toRight()
{

    if(i==imgArr.length-1)
    {
        i=0;
        img.setAttribute('src',imgArr[i]);
    }
    else
    {
        i++;
        img.setAttribute('src',imgArr[i]);
    }
}
