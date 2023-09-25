let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelectorAll('.list .item');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
// let btn = document.querySelectorAll('.btn');
// console.log(btn);
openShopping.addEventListener('click', function(){
    body.classList.add('active');
})
closeShopping.addEventListener('click', function(){
    body.classList.remove('active');
})

quantity.textContent = 0
total.textContent = 0
// console.log(list);

list.forEach(function (product) {
    product.lastElementChild.onclick = function(){
        listCard.innerHTML +="Product Name is : "+ product.getAttribute("title") +"<br>"+ " The price is : " +product.getAttribute("price") + "<br><br>"
        quantity.textContent = +(quantity.textContent) + 1
        total.textContent = +(total.textContent)+ +(product.getAttribute("price"))
    }
});