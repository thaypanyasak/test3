// Smooth href


/* Search Box*/
let search = document.querySelector(".search-box");

document.querySelector("#search-icons").onclick = () => {
    search.classList.toggle("active");
    navbar.classList.remove("active")
    cart.classList.remove("active");
    user.classList.remove("active");
}
function searchs(){
    const searchInput = document.getElementById('search-item');
    const productTitles = document.querySelectorAll('.product-title');
   
    searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    productTitles.forEach(function(title) {
        if (title.textContent.toLowerCase().includes(query)) {
        title.parentElement.style.display = 'block';
        }
         else {
            title.parentElement.style.display = 'none';
        }
    });
    });
    const productBoxes = document.querySelectorAll('.product-box:not([style*="display: none"])');
    if(productBoxes.length ===1){
        document.getElementById('product-list').style.padding='50px 610px';
    }
    if(productBoxes.length >1){
        document.getElementById('product-list').style.padding='50px 100px';
    }

}

//Buy Button
document.querySelectorAll('.truck-button').forEach(button => {
    button.addEventListener('click', e => {
        
        e.preventDefault();
        
        let box = button.querySelector('.box'),
            truck = button.querySelector('.truck');
        
        if(!button.classList.contains('done')) {
            
            if(!button.classList.contains('animation')) {

                button.classList.add('animation');

                gsap.to(button, {
                    '--box-s': 1,
                    '--box-o': 1,
                    duration: .3,
                    delay: .5
                });

                gsap.to(box, {
                    x: 0,
                    duration: .4,
                    delay: .7
                });

                gsap.to(button, {
                    '--hx': -5,
                    '--bx': 50,
                    duration: .18,
                    delay: .92
                });

                gsap.to(box, {
                    y: 0,
                    duration: .1,
                    delay: 1.15
                });

                gsap.set(button, {
                    '--truck-y': 0,
                    '--truck-y-n': -26
                });

                gsap.to(button, {
                    '--truck-y': 1,
                    '--truck-y-n': -25,
                    duration: .2,
                    delay: 1.25,
                    onComplete() {
                        gsap.timeline({
                            onComplete() {
                                button.classList.add('done');
                            }
                        }).to(truck, {
                            x: 0,
                            duration: .4
                        }).to(truck, {
                            x: 40,
                            duration: 1
                        }).to(truck, {
                            x: 20,
                            duration: .6
                        }).to(truck, {
                            x: 96,
                            duration: .4
                        });
                        gsap.to(button, {
                            '--progress': 1,
                            duration: 2.4,
                            ease: "power2.in"
                        });
                    }
                });
                
            }
            
        } else {
            button.classList.remove('animation', 'done');
            gsap.set(truck, {
                x: 4
            });
            gsap.set(button, {
                '--progress': 0,
                '--hx': 0,
                '--bx': 0,
                '--box-s': .5,
                '--box-o': 0,
                '--truck-y': 0,
                '--truck-y-n': -26
            });
            gsap.set(box, {
                x: -24,
                y: -6
            });
        }
        var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
    });
});











// const searchs = () =>{
//     const searchbox = document.getElementById("search-item").value.toUpperCase();
//     const storeItems = document.getElementById("product-list")
//     const products = document.querySelectorAll(".product-box")
//     const pname = document.getElementsByClassName("h2")


//     for(var i=0; i < pname.length; i++){
//         let match = products[i].getElementsByTagName('h2')[0];

//         if(match){
//             let textvalue = match.textContent || match.innerHTML

//             if (textvalue.toUpperCase().indexOf(searchbox) > -1){
//                 products[i].style.display = "";
//             }else{
//                 products[i].style.display = "none";
//             }
//         }
        
//     }
// }
//----------------

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icons").onclick = () =>{
    navbar.classList.toggle("active");
    search.classList.remove("active");
    cart.classList.remove("active");
    cartIcon.classList.remove("active");
    closeCart.classList.remove("active");
    user.classList.remove("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
    search.classList.remove("active");
} 

let cartIcon = document.querySelector("#cart-icons")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

cartIcon.onclick = () =>{
    document.getElementById('search-icons').style.color='white';
    document.getElementById('cart-icons').style.color='white';
    document.getElementById('menu-icons').style.color='white';
    document.getElementById('user-icons').style.color='white';
    cart.classList.add("active")
    search.classList.remove("active");
    user.classList.remove("active");
};
closeCart.onclick = () =>{
    cart.classList.remove("active")
    document.getElementById('search-icons').style.color='black';
    document.getElementById('cart-icons').style.color='black';
    document.getElementById('menu-icons').style.color='black';
    document.getElementById('user-icons').style.color='black';

};





// User box 

let user = document.querySelector(".nav-bar .container");

document.querySelector("#user-icons").onclick = () => {
    user.classList.toggle("active");
    cart.classList.remove("active");
    search.classList.remove("active");
    navbar.classList.remove("active");
}

/* Sử dụng Cart */
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
} else{
    ready();
}
// Tạo Function
function ready(){
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons)
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input= quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

//tạo add vào cart
    var addCart = document.getElementsByClassName("add-cart");
    for(var i=0; i< addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    document.getElementsByClassName("btn-buy")[0].addEventListener("dblclick", buyButtonClicked)


}
//Tạo function cho button BUY
function buyButtonClicked(){
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        icon: 'success',
        title: 'Đơn hàng đã được đặt',
        timer: 1500,
        timerProgressBar: true,
    })
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

// tạo function xóa khỏi cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// Quantity changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1;
    }
    updatetotal();
}
// Tạo function Add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    updatetotal();
}
function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i=0; i< cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText==title){
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                icon: 'success',
                title: 'Thêm vào giỏ hàng thành công',
                timer: 1000,
                timerProgressBar: true,
            })
            return;
    }
}

   

var cartBoxContent = `
<img src="${productImg}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                           <div class="size">  
                                <input type="number" value="1" class="cart-quantity">
                                <select name="size" id="cart-size">
                                    <option value="">--SIZE--</option>
                                    <option value="">38</option>
                                    <option value="">39</option>
                                    <option value="">41</option>
                                    <option value="">42</option>
                                    <option value="">43</option>
                                    <option value="">44</option>
                                </select>
                            </div>
                    </div>
                    <!--Remove cart-->
                    <i class='bx bxs-trash-alt cart-remove' ></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
cartShopBox
    .getElementsByClassName("cart-size")[0];

    
    
}








// Tạo function Update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var checkcartContent = document.querySelector('.cart-content');
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    if(checkcartContent.innerHTML.trim() === ''){
        document.getElementsByClassName('total-price')[0].innerText = "0 VND";
        
    }
    else{
         for(var i = 0; i < cartBoxes.length; i++){
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName('cart-price')[0];
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            var price = priceElement.innerText.replace(" VND","");
            var formatPrice  = parseFloat(price.replaceAll('.', ''));
            var quantity = quantityElement.value;
            total = total + (formatPrice) * Number(quantity);
            var checkout = total.toLocaleString("vi-VN");
        }
            document.getElementsByClassName('total-price')[0].innerText = checkout + "  VND";
    }
    
}
// HOME PAGE
$(document).ready(function () {
    $(".one").on('click' ,function(){
        
        $(".product-img").attr("src","./home/bas1.jpg");
        $(".varian").removeClass("active");
        $(this).addClass("active");

    })
});

$(document).ready(function () {
    $(".two").on('click' ,function(){
        $(".product-img").attr("src","./home/bas2.jpg");
       
        $(".varian").removeClass("active");
        $(this).addClass("active");

    })
});

$(document).ready(function () {
    $(".three").on('click' ,function(){
        $(".product-img").attr("src","./home/bas3.jpg");
       
        $(".varian").removeClass("active");
        $(this).addClass("active");

    })
});


  // Back to top button
  let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// CHECK OUT

