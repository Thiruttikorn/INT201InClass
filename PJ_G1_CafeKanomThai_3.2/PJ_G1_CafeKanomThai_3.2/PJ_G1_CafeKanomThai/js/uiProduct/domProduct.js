import products from "../products.js";
import { CookieUtil } from "./cookies.js"; // Import


//product จะเลือกใช้tag p
const product = document.querySelector("#p");

let count = 0;
const CountInCart = document.getElementById("count"); //เลือกใช้ id ชื่อ count
CountInCart.textContent = count;


//Clear cart
let cart = [];
localStorage.setItem('cart', JSON.stringify(cart));



//---------------- เอาข้อมูลจาก products.js มาใช้ -------------
for (let items of products) {
  console.log(items);
  let divEle = document.createElement("div");
  //let divEle = document.getElementsByTagName("div");
  divEle.className = "w-1/1 rounded-lg shadow-xl bg-white ";
  divEle.setAttribute("id", items.name); //set attr :ตรง id เป็น items.name
  divEle.setAttribute("name", items.thai);
  divEle.setAttribute("pieces", items.pieces)
  let ImgEle = appendImgProduct(items); 
  let NameEle = appendNameProduct(items);
  let DetailEle = appendDetailProduct(items);

  divEle.appendChild(ImgEle); //เอาตัวที่ประกาศ ใส่เข้าไปใน divEle (ที่เป็นตัวแทนของ div)
  divEle.appendChild(NameEle);
  divEle.appendChild(DetailEle);
  product.appendChild(divEle); //ตัวแทน (divEle) ไปเป็นลูกของ product
}

function appendImgProduct(item) {
  let imgEle = document.createElement("img");
  imgEle.className = "rounded-t-lg h-60 w-full object-cover";
  imgEle.src = item.srcimg;
  imgEle.alt = item.alt;
  return imgEle;
}

function appendNameProduct(item) {
  let divProduct = document.createElement("div");
  let headerEle = document.createElement("header");
  headerEle.className = "text-xl font-extrabold p-4"
  headerEle.textContent = item.name;
  let divDetail = document.createElement("div");
  divDetail.className = "px-5";
  let pEle = document.createElement("p");
  pEle.className = "text-gray-500 px-4";
  // pEle.textContent = item.thai; // ไว้ใส่คำอธิบาย

  divDetail.appendChild(pEle);
  divProduct.appendChild(headerEle);
  divProduct.appendChild(divDetail);
  return divProduct;
}

function appendDetailProduct(item) {
  let footerDetail = document.createElement("div");
  footerDetail.className = "py-3 px-8 text-gray-500 grid grid-cols-2 gap-6"

  let divPrice = document.createElement("p");
  divPrice.className = "text-teal-500 font-semibold text-lg font-poppins text-left"
  divPrice.textContent = "ราคา : " + item.price + "฿";

  //add pieces
  let divPieces = document.createElement("p");
  divPieces.className = "text-teal-500 font-semibold text-lg font-poppins text-right"
  divPieces.textContent = "pieces : " + item.pieces;

  //add button add 
  let btnEle = document.createElement("button");
  btnEle.className = "py-2 px-4  bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600 ";
  btnEle.textContent = "Add to Cart";

  btnEle.setAttribute("id", item.tag);
  btnEle.setAttribute("name", "product");
  

  //เมื่อกดปุ่ม add to cart
  btnEle.addEventListener("click", () => {
    alert(`add ${item.name} to cart`);
    count++;
    CountInCart.textContent = count;
    

    //เก็บข้อมูลลงใน localStorage แสดงรายการสินค้า
    let productIndex = cart.findIndex((product) => product.tag === item.tag);
    console.log(productIndex);
    if (productIndex == -1) {
      item.inCart += 1;
      cart.push(item);
    } else {
      cart[productIndex].inCart += 1;
    }
    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart));
    //   document.cookie="product 1 +" +btnEle+ "; max-age=" +60*60*24*10;


    //เก็บข้อมูลลงใน localStorage แสดงจำนวนสินค้าทั้งหมดที่อยู่ในตะกร้าตอนนี้
    // let productNumbers = cart.findIndex((product) => product.tag === item.tag);
    // console.log(productNumbers);
      
    //   productNumbers = parseInt(productNumbers);
      
    //   if(productNumbers) {
    //         localStorage.setItem('cartNumbers', productNumbers + 1);
    //         document.querySelector('.cart span').textContent = productNumbers + 1;
    //   }else {
    //         localStorage.setItem('cartNumbers', 1);
    //         document.querySelector('.cart span').textContent = 1;
    //   }   
      
    //   setItems(product);
    localStorage.setItem('cartNumbers',count);

    
    //เก็บข้อมูลลงใน localStorage แสดงราคาของสินค้าทั้งหมดที่อยู่ในตะกร้าตอนนี้
    let cartCost = localStorage.getItem('totalCost');
    // console.log("My cartCost is", cartCost);
     if(cartCost != null) {
          cartCost = parseInt(cartCost);
          localStorage.setItem('totalCost',cartCost+ item.price);
          console.log("My cartCost is", cartCost+ item.price);          
    }else {
          localStorage.setItem('totalCost', item.price);
          console.log("My cartCost is", cartCost+ item.price); 
    }

  });

  

  //---Clear Your Cart-----
  function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const clearbtn = document.querySelector('#clearbtn')

  clearbtn.addEventListener('click', () => {
    // console.log(JSON.stringify(CookieUtil.get('ItemInCart')));
    clearCart()
    // CookieUtil.set('ItemInCart', JSON.stringify(cart), Date(9000));
    // CookieUtil.set('ItemCount', 0, Date(9000));
    CountInCart.textContent = 0;
  })

  CountInCart.textContent = CookieUtil.get('ItemCount');
  //---------------------------- 

  footerDetail.appendChild(divPrice);
  footerDetail.appendChild(divPieces);
  footerDetail.appendChild(btnEle);

  return footerDetail;

}

//   //---------Set Cookie---------
  CookieUtil.set('name', 'Ketdara'),new Date('November 24, 2021'); //ใส่ชื่อตัวอย่างลงไปใน'name'

  alert(`CookieUtil.get("name")#1: ${CookieUtil.get('name')}`); // "Ketdara" แสดงชื่อที่เรา set เอาไว้

  CookieUtil.set('name2', 'Ketdara', new Date('December 10, 2022')); //กำหนดexpired 2022-12-09 17.00

  //remove the cookies
 CookieUtil.unset("name"); //ยกเลิกการset ชื่อต้นแบบออกไป
//   //-------------End------------