/**********************************************************************logout****************************************************************************************/
let logoutLink=document.getElementById('logoutLink');
function logout()
{
    let loggin=JSON.parse(localStorage.removeItem("loggedin_user"))
    logoutLink.style.display='none'
}
/********************************************************************get cart products******************************************************************************************** */
let cart=JSON.parse(localStorage.getItem("cart"));
let cartContent=document.getElementById('cart-content');
var tbody=document.getElementById('table-body');
var priceDiv=document.getElementById('priceDiv')
var input=document.getElementsByClassName('quantity');

window.onload=function()
{
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if(cart.length==0)
    {
        cartContent.innerHTML=``;
        cartContent.innerHTML=`<h1>card is empty</h1>
                              <img src="../images/9960436.jpg"/>
                               <a href="../../products_page/html/products_page.html" class="back">Back To Shopping</a>                                `
    }
    else
    {
        let total=0
        var input=document.getElementsByClassName('quantity');
        var btn=document.getElementsByClassName('increaseBtn');
        for(let i=0;i<cart.length;i++)
        { 
            tbody.innerHTML+=`<tr>
                                <td>${i+1}</td>
                                <td>${cart[i].productName}</td>
                                <td><img src=${cart[i].img}></td>
                                <td><input class="quantity" type="number" value="${cart[i].orderedQuantity}"><button class="increaseBtn">+</button></td>
                                <td>${cart[i].price}$</td>
                                <td><button onclick="removeProduct(${cart[i].id})">remove</button></td>
                            </tr>`
                            total+=(Number(input[i].value)) * (Number(cart[i].price))       
        }
            priceDiv.innerText=`Total: ` + total
                let sum=0

                for(let x=0;x<cart.length;x++)
                {
                    let allProducts=JSON.parse(localStorage.getItem("allProducts"));
                    btn[x].addEventListener('click',function(e){
                        sum=0
                        for(let n=0;n<cart.length;n++)
                        {
                            sum+=(Number(input[n].value)) * (Number(cart[n].price)) 
                        }
                        priceDiv.innerText=``
                        priceDiv.innerText=`Total: ` + sum
                        cart[x].orderedQuantity=input[x].value;
                        allProducts[x].orderedQuantity=input[x].value;
                        localStorage.setItem("cart",JSON.stringify(cart));
                        localStorage.setItem("allProducts",JSON.stringify(allProducts));
                    })

                }                
    }   
    /********************************************************************cart counter******************************************************************************************/
    var cartCounter=document.getElementById('counter');
    let cartLength=JSON.parse(localStorage.getItem("cart")) || [];
    cartCounter.innerText=cartLength.length;
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
/********************************************************************remove product******************************************************************************************** */
function removeProduct(productID)
{
    let newCart=JSON.parse(localStorage.getItem("cart"));
    let index=newCart.findIndex((elem)=>elem.id==productID)
    newCart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(newCart))
    let newCart2=JSON.parse(localStorage.getItem("cart"));
    tbody.innerHTML=``;
    let all=0
    for(let i=0;i<newCart2.length;i++)
        { 
            tbody.innerHTML+=`<tr>
                                <td>${i+1}</td>
                                <td>${newCart2[i].productName}</td>
                                <td><img src=${newCart2[i].img}></td>
                                <td><input class="quantity" type="number" value="${newCart2[i].orderedQuantity}"><button class="increaseBtn">+</button></td>
                                <td>${newCart2[i].price}</td>
                                <td><button onclick="removeProduct(${newCart2[i].id})">remove</button></td>
                            </tr>`
                            var input=document.getElementsByClassName('quantity');
                            all+=(Number(input[i].value)) * (Number(newCart2[i].price))
        }
        priceDiv.innerText=``
        priceDiv.innerText=`Total: ` + all
        var cartCounter=document.getElementById('counter');
        cartCounter.innerText=``
        cartCounter.innerText=cart.length
        if(newCart2.length==0)
        {
            cartContent.innerHTML=``;
            cartContent.innerHTML=`<h1>card is empty</h1>
                                    <img src="../images/9960436.jpg"/>
                                    <a href="../../products_page/html/products_page.html" class="back">Back To Shopping</a>                                `
        }
        var input=document.getElementsByClassName('quantity');
        var btn=document.getElementsByClassName('increaseBtn');
        for(let x=0;x<newCart2.length;x++)
            {
                btn[x].addEventListener('click',function(e){
                    sum=0
                    for(let n=0;n<newCart2.length;n++)
                    {
                        sum+=(Number(input[n].value)) * (Number(newCart2[n].price)) 
                    }
                    priceDiv.innerText=``
                    priceDiv.innerText=`Total: ` + sum
                })
            }  
        localStorage.setItem("cart",JSON.stringify(newCart2))
}
/********************************************************************buy******************************************************************************************/
function buy()
{
    localStorage.removeItem("cart");
}