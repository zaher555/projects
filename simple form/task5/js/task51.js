var balls=document.getElementsByClassName('ball');
var colors=['red','yellow','green'];
setInterval(function(){
    for (let i = 0; i < balls.length; i++) {
        setTimeout(function(){
            balls[i].style.backgroundColor=colors[i];
        },(i+1) * 1000)
        setTimeout(function(){
            balls[i].style.backgroundColor='#dbdbdb';
            },(i+1) * 1500)
        }
},3500)