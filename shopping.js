let arr1=[{product:'HEADPHONE',img_link:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',price: 2000},
    {product:'WATCH',img_link:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',price:1700},
    {product:'TWS',img_link:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',price:1300},
    {product:'BLUETOOTH SPEAKER',img_link:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',price:3000},
    {product:'BACKPACK',img_link:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',price:2112},
    {product:'KEY-BOARD',img_link:'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80',price:1345},
    {product:'MOUSE',img_link:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',price:2499},
    {product:'PHONE',img_link:'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=500&q=80',price:3499}]
let box1=document.querySelector("#drum");
for(let i=0;i<8;i++){
    box1.innerHTML+=`<div class="container"><img src="${arr1[i].img_link}">
    <p><B>${arr1[i].product}</B><br>price=${arr1[i].price}<br><div class="box" id="${arr1[i].product}"><p >Add to Cart</p></div></p></div>`;
}
let btn=document.querySelector("#HEADPHONE");
btn.addEventListener('click',function(){
    cartItem.innerHTML+=`<div class="container"><img src="${arr1[0].img_link}>">
    <p><B>${arr1[0].product}</B><br>price=${arr1[0].price}</div>`;
});