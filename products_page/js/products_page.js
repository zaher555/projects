/******************************************************************header links color*****************************************************************************************/
// var colorLink=document.getElementsByClassName('')
var cartCounter=document.getElementById('counter');
/**********************************************************************logout****************************************************************************************/
let logoutLink=document.getElementById('logoutLink');
function logout()
{
    let loggin=JSON.parse(localStorage.removeItem("loggedin_user"))
    logoutLink.style.display='none'
}
/***********************************************************************creation of data*********************************************************************************/
let categories=[
    {id:1,title:'phones'},
    {id:2,title:'laptops'},
    {id:3,title:'watches'},
    {id:4,title:'clothes'},
    {id:5,title:'furniture'}
]
let products=[
    {id:1,productName:'Samsung Galaxy S22 Ultra',img:'../../product_images/phones/pexels-cottonbro-5082579.jpg',price:100,catID:1,catName:'phones',availableQuantity:5,orderedQuantity:0},
    {id:2,productName:'Samsung Galaxy S22',img:'../../product_images/phones/pexels-fotios-photos-1290515.jpg',price:200,catID:1,catName:'phones',availableQuantity:10,orderedQuantity:0},
    {id:3,productName:'iPhone 15 Pro Max',img:'../../product_images/phones/pexels-mateusz-dach-99805-1294886.jpg',price:300,catID:1,catName:'phones',availableQuantity:3,orderedQuantity:0},
    {id:4,productName:'iPhone 14 Pro',img:'../../product_images/phones/pexels-tracy-le-blanc-67789-607812.jpg',price:400,catID:1,catName:'phones',availableQuantity:7,orderedQuantity:0},
    {id:5,productName:'Google Pixel 7',img:'../../product_images/phones/pexels-zeleboba-11299391.jpg',price:500,catID:1,catName:'phones',availableQuantity:9,orderedQuantity:0},

    {id:6,productName:'hp',img:'../../product_images/laptops/pexels-jakubzerdzicki-18538670.jpg',price:600,catID:2,catName:'laptops',availableQuantity:2,orderedQuantity:0},
    {id:7,productName:'dell',img:'../../product_images/laptops/pexels-jean-daniel-4006182.jpg',price:700,catID:2,catName:'laptops',availableQuantity:15,orderedQuantity:0},
    {id:8,productName:'lenovo',img:'../../product_images/laptops/pexels-junior-teixeira-1064069-2047905.jpg',price:800,catID:2,catName:'laptops',availableQuantity:3,orderedQuantity:0},
    {id:9,productName:'acer',img:'../../product_images/laptops/pexels-pixabay-40185.jpg',price:900,catID:2,catName:'laptops',availableQuantity:8,orderedQuantity:0},
    {id:10,productName:'samsung',img:'../../product_images/laptops/pexels-veeterzy-303383.jpg',price:600,catID:2,catName:'laptops',availableQuantity:15,orderedQuantity:0},

    {id:11,productName:'Omega',img:'../../product_images/watches/pexels-antonytrivet-9980309.jpg',price:150,catID:3,catName:'watches',availableQuantity:20,orderedQuantity:0},
    {id:12,productName:'Patek Philippe',img:'../../product_images/watches/pexels-antonytrivet-9980378.jpg',price:200,catID:3,catName:'watches',availableQuantity:5,orderedQuantity:0},
    {id:13,productName:'Cartier',img:'../../product_images/watches/pexels-antonytrivet-9980793.jpg',price:100,catID:3,catName:'watches',availableQuantity:5,orderedQuantity:0},
    {id:14,productName:'Rolex',img:'../../product_images/watches/pexels-ferarcosn-190819.jpg',price:50,catID:3,catName:'watches',availableQuantity:4,orderedQuantity:0},
    {id:15,productName:'IWC',img:'../../product_images/watches/pexels-pixabay-277390.jpg',price:70,catID:3,catName:'watches',availableQuantity:30,orderedQuantity:0},

    {id:16,productName:'T-Shirt',img:'../../product_images/clothes/pexels-anj-namoro-1479642-2850487.jpg',price:30,catID:4,catName:'clothes',availableQuantity:25,orderedQuantity:0},
    {id:17,productName:'Tie',img:'../../product_images/clothes/pexels-dom-j-7304-45055.jpg',price:100,catID:4,catName:'clothes',availableQuantity:50,orderedQuantity:0},
    {id:18,productName:'T-shirt',img:'../../product_images/clothes/pexels-dom-j-7304-45982.jpg',price:120,catID:4,catName:'clothes',availableQuantity:14,orderedQuantity:0},
    {id:19,productName:'Shoes',img:'../../product_images/clothes/pexels-goumbik-292999.jpg',price:90,catID:4,catName:'clothes',availableQuantity:2,orderedQuantity:0},
    {id:20,productName:'Sport suit',img:'../../product_images/clothes/pexels-ollivves-1103828.jpg',price:85,catID:4,catName:'clothes',availableQuantity:5,orderedQuantity:0},

    {id:21,productName:'sofa',img:'../../product_images/furniture/pexels-element5-1125130.jpg',price:100,catID:5,catName:'furniture',availableQuantity:5,orderedQuantity:0},
    {id:22,productName:'wooden chair',img:'../../product_images/furniture/pexels-kathekth-3049121.jpg',price:200,catID:5,catName:'furniture',availableQuantity:35,orderedQuantity:0},
    {id:23,productName:'bookcase',img:'../../product_images/furniture/pexels-nguyendesigner-244133.jpg',price:250,catID:5,catName:'furniture',availableQuantity:45,orderedQuantity:0},
    {id:24,productName:'Dining table',img:'../../product_images/furniture/pexels-pixabay-534172.jpg',price:300,catID:5,catName:'furniture',availableQuantity:10,orderedQuantity:0},
    {id:25,productName:'arm chair',img:'../../product_images/furniture/pexels-steve-923192.jpg',price:400,catID:5,catName:'furniture',availableQuantity:17,orderedQuantity:0},
]
// ****************************************************************categories********************************************************************************************/
var list=document.getElementById('category')                  
for(let x=0;x<categories.length;x++)
{
    list.innerHTML+=`<li><a onclick="selectProductsByCategory(${categories[x].id})">${categories[x].title}</a></li>`
}
/************************************************************************show all products************************************************************************************8 */
var categoryProducts=document.getElementById('category-products')         //space which contain cards
window.onload=function()
{
    showAllProducts();
    /******************************************************************show cart length*************************************************************************** */
    var cartCounter=document.getElementById('counter');
    let cartLength=JSON.parse(localStorage.getItem("cart")) || [];
    cartCounter.innerText=cartLength.length;
    /******************************************************************show email*************************************************************************** */
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
    localStorage.setItem("allProducts",JSON.stringify(products))
}
function showAllProducts()
{
    categoryProducts.innerHTML=``
    for(let z=0;z<products.length;z++)
        {
            categoryProducts.innerHTML+=`<div class="card-product">
                                            <div class="image">
                                                <img src=${products[z].img}>
                                            </div>
                                            <div class="product-details">
                                                <h3>${products[z].productName}</h3>
                                                <p>${products[z].price}$</p>
                                                <a href="../../product_details/html/product_details.html" onclick="viewDetails(${products[z].id})">view</a>
                                                <a onclick="addToCrt(${products[z].id})"><i class="fa-solid fa-basket-shopping" title="add to cart"></i></a>
                                                </div>
                                        </div>`
        }
}
/************************************************************************show products of selected category************************************************************************************8 */
let selectedCategory=[];
function selectProductsByCategory(categoryID)
{
    categoryProducts.innerHTML=``
    selectedCategory=[]
    for(let i=0;i<products.length;i++)
    {
        if(products[i].catID==categoryID)
        {
            selectedCategory.push(products[i]);
        }
    }
    console.log(selectedCategory)
    for(let y=0;y<selectedCategory.length;y++)
        {
            categoryProducts.innerHTML+=`<div class="card-product">
                                            <div class="image">
                                                 <img src=${selectedCategory[y].img}>
                                            </div>     
                                            <div class="product-details">
                                                <h3>${selectedCategory[y].productName}</h3>
                                                <p>${selectedCategory[y].price}$</p>
                                                <a href="../../product_details/html/product_details.html" onclick="viewDetails(${selectedCategory[y].id})">view</a>
                                                <a onclick="addToCrt(${selectedCategory[y].id})"><i class="fa-solid fa-basket-shopping" title="add to cart"></i></a>
                                            </div>
                                        </div>`
        }
}
/************************************************************************view product details************************************************************************************************* */
let selectedProductDetails={};
function viewDetails(productID)
{
   for(let n=0;n<products.length;n++)
    {
        if(productID==products[n].id)
        {
            selectedProductDetails=products[n];
        }
    }
    localStorage.setItem("productDetail",JSON.stringify(selectedProductDetails));
    console.log(JSON.parse(localStorage.getItem("productDetail")));
}
/************************************************************************Add product to cart************************************************************************************************* */
function addToCrt(productID)
{   
    let loggedin=JSON.parse(localStorage.getItem("loggedin_user"))
    if(loggedin==null)
    {
        alert('You Have To Log in First');
    }
    else
    {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingProductIndex = cart.findIndex(ele => ele.id == productID);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].orderedQuantity += 1;
            alert('product already in cart')
        } else {
            for(let n=0;n<products.length;n++)
            {
                if(products[n].id==productID)
                {
                    products[n].orderedQuantity+=1;
                    cart.push(products[n]);
                    alert('product added successfully')
                    cartCounter.innerText=``
                    cartCounter.innerText=cart.length
                }
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
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
