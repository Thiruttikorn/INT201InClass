// import { Products } from "./products.js"

let carts = document.querySelectorAll('.add-cart');
    let products = [
            {
                  name: 'Klamduan (ขนมกลีบลำดวน)',
                  tag: 'KN001',
                  img: 'klamduan',
                  price: 35,
                  inCart:0
            },
            {
                  name: 'Bualoi (บัวลอย)',
                  tag: 'KN002',
                  img: 'bualoi',
                  price: 25,
                  inCart:0
            },
            {
                  name: 'Tako (ตะโก้)',
                  tag: 'KN003',
                  img: 'tako',
                  price: 35,
                  inCart:0
            },
            {
                  name: 'Tongyib (ทองหยิบ)',
                  tag: 'KN004',
                  img: 'tongyib',
                  price: 30,
                  inCart:0
            }
      ];

// let searchIcon = document.querySelector("#search"); 
// let boolSearch = false; 

// searchIcon.addEventListener("click", () => {
//     boolSearch = !boolSearch;
//     if (boolSearch) {
//         document.querySelector("#searchbar").innerHTML += `<input type="text" id="searchValue" placeholder="ชื่อขนม เช่น บัวลอย"  class="form-control"></input>`;
//     } else {
//         document.querySelector("#searchbar").innerHTML = "";
//     }
// });



for (let i=0; i < carts.length; i++) {
      carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i])
      })
}

function onLoadcartNumbers(){
      let productNumbers = localStorage.getItem('cartNumbers');

      if(productNumbers) {
            document.querySelector('.cart span').textContent = productNumbers;
      }
}

function cartNumbers(product) {
      let productNumbers = localStorage.getItem('cartNumbers');
      
      productNumbers = parseInt(productNumbers);
      
      if(productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.cart span').textContent = productNumbers + 1;
      }else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.cart span').textContent = 1;
      }   
      
      setItems(product);
}

function setItems(product) {
      let cartItems = localStorage.getItem('productsInCart');
      cartItems = JSON.parse(cartItems);

      if(cartItems != null) {
            if(cartItems[product.tag] == undefined) {
                  cartItems = {
                        ...cartItems,
                        [product.tag]: product
                  }
            }
            cartItems[product.tag].inCart += 1;
      }else {
            product.inCart = 1;
            cartItems = {
                  [product.tag]: product
            }   
      }
      localStorage.setItem("productsInCart", JSON.stringify
      (cartItems));
}

function totalCost(product) {
      //console.log("The product price is", product.price);
      let cartCost = localStorage.getItem('totalCost');
      
      console.log("My cartCost is", cartCost);
      console.log(typeof cartCost);

      if(cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
      }else {
            localStorage.setItem("totalCost", product.price);
      }  
      
}

function displayCart() {
      let cartItems = localStorage.getItem("productsInCart");
      cartItems = JSON.parse(cartItems);
      let productContainer = document.querySelector(".products");
      let cartCost = localStorage.getItem('totalCost');


      console.log(cartItems);
      if(cartItems && productContainer) {
            productContainer.innerHTML = ''; 
            Object.values(cartItems).map(item => {
                  productContainer.innerHTML += `
                  <div class="product">
                        <ion-icon name="close-circle"></ion-icon>
                        <img src="./images/${item.tag}.jpg" width="50" height="50"> 
                        <span>${item.name}</span>
                        <span>${item.tag}</span>
                  </div>
                  <div class="price">฿${item.price}</div>
                  <div class="quantity">
                  <ion-icon name="add-outline"></ion-icon>
                  <span>${item.inCart}</span>
                  <ion-icon name="add-outline"></ion-icon>
                  </div>
                  <div class="total">
                        ฿${item.inCart * item.price}.00
                  </div>
                  `;
            });  
            
            productContainer.innerHTML += `
                  <div class="basketTotalContainer">
                        <h4 class="basketTotalTitle">
                              Basket Total
                        </h4>
                        &nbsp
                        <h4 class="basketTotal">
                              ฿${cartCost}.00
                        </h4>
                  </div>     
            `;

      }
}


function removeCartItem(product){
    
      let cartItems = localStorage.getItem('productsInCart');
      cartItems = JSON.parse(cartItems);
      
      for(var i in cartItems) {
         if(cartItems != null){
             localStorage.removeItem('cartNumbers',cartItems[i].inCart--);
             localStorage.removeItem('productsInCart',cartItems[i]);
             localStorage.removeItem('totalCost');
          } else {
              console.log("empty");
              document.getElementById("demo").innerHTML = "cart is empty";
          }
         
      }
      
  }


onLoadcartNumbers();
displayCart();