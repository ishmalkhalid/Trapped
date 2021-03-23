// script to update shopping cart and total, and purchase items
var p1=document.getElementById('cart1');
var p2=document.getElementById('cart2');
var p3=document.getElementById('cart3');

var cart=document.getElementById('currCart');
var total=document.getElementById('currTotal');

var totalAmount=0;
var cartText="";
var p1Text="";
var p2Text="";
var p3Text="";
var p1Amount=0;
var p2Amount=0;
var p3Amount=0;
var purchased=false;

var purchase=document.getElementById('checkoutBtn');

// update cart and total by adding one unit of product 1
p1.addEventListener("click",function(){
  if (!purchased){
    p1Amount+=1;
    if (p1Amount>0){
      p1Text=p1Amount+" SS";
      totalAmount+=120;
      cartText=p1Text;
      if (p2Text!==""){
        cartText+=","+p2Text;
      }
      if(p3Text!=""){
        cartText+=","+p3Text;
      }
      cart.innerText="Cart: "+cartText;
      total.innerText="Total: $"+totalAmount;
    }
  }
});

// update cart and total by adding one unit of product 2
p2.addEventListener("click",function(){
  if (!purchased){
    p2Amount+=1;
    if (p2Amount>0){
      p2Text=p2Amount+" TS";
      totalAmount+=70;
      cartText=p2Text;
      if (p1Text!==""){
        cartText+=","+p1Text;
      }
      if(p3Text!=""){
        cartText+=","+p3Text;
      }
      cart.innerText="Cart: "+cartText;
      total.innerText="Total: $"+totalAmount;
    }
  }
});

// update cart and total by adding one unit of product 3
p3.addEventListener("click",function(){
  if (!purchased){
    p3Amount+=1;
    if (p3Amount>0){
      p3Text=p3Amount+" C";
      totalAmount+=50;
      cartText=p3Text;
      if (p1Text!==""){
        cartText+=","+p1Text;
      }
      if(p2Text!=""){
        cartText+=","+p2Text;
      }
      cart.innerText="Cart: "+cartText;
      total.innerText="Total: $"+totalAmount;
    }
  }
});

// generate confirmation of order upon purchase, with the total amount and items message
purchase.addEventListener("click",function(){
  if ((!purchased) && totalAmount!=0){
    var order="Your order of "+ cartText+" amounting to $"+totalAmount + " has been placed.";
    alert(order);
    purchase.innerHTML="Order placed";
    purchase.style.background="white";
    purchase.style.color="#080F0F";
    purchase.style.border=" 2px solid #080F0F";
    purchased=true;
    purchase.style.cursor="default";
  }
  else if ((!purchased) && totalAmount==0) {
    alert("please add items to the cart first!");
  }

});
