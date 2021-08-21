const getTotalPrice = document.getElementById('total-price');
const bestPrice = parseFloat(document.getElementById('best-price').innerText);
//function for settting price
function setPrice(getItem, value){
    const getProduct = document.getElementById(getItem);
    getProduct.innerText = value;
}
//function for calculating price
function macPrice(){
    const memoryPrice = parseFloat(document.getElementById('memory-cost').innerText);
    const storagePrice = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryPrice = parseFloat(document.getElementById('delivery-charge').innerText);
    const finalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    getTotalPrice.innerText = finalPrice;
    const bigTotalPrice = document.getElementById('big-total-price');
    bigTotalPrice.innerText = getTotalPrice.innerText;
}

document.getElementById('memory8-button').addEventListener('click', function(){
    setPrice('memory-cost', 0);
    macPrice();
})

document.getElementById('memory16-button').addEventListener('click', function(){
    setPrice('memory-cost', 180);
    macPrice();
})

document.getElementById('storage256-button').addEventListener('click', function(){
    setPrice('storage-cost', 0);
    macPrice();
})

document.getElementById('storage512-button').addEventListener('click', function(){
    setPrice('storage-cost', 100);
    macPrice();
})

document.getElementById('storage1-button').addEventListener('click', function(){
    setPrice('storage-cost', 180);
    macPrice();
})

document.getElementById('free-delivery-button').addEventListener('click', function(){
    setPrice('delivery-charge', 0);
    macPrice();
})

document.getElementById('paid-delivery-button').addEventListener('click', function(){
    setPrice('delivery-charge', 20);
    macPrice();
})

//promo code
let isUsed = false;
document.getElementById('promo-button').addEventListener('click', function(){
    const getPromoInput = document.getElementById('promo-input');
    const totalPrice = parseFloat(getTotalPrice.innerText);
    const discount = totalPrice * .20;
    if(getPromoInput.value == 'stevekaku' && isUsed == false){
        const discountPrice = totalPrice - discount; 
        getTotalPrice.innerText = discountPrice;
        const bigTotalPrice = document.getElementById('big-total-price');
        bigTotalPrice.innerText = getTotalPrice.innerText;
        isUsed = true;
    }
    getPromoInput.value = '';
})


