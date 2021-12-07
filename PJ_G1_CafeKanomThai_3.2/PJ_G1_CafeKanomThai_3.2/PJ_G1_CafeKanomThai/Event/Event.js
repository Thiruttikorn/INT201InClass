import products from "../js/products.js";
const searchbar = document.getElementById('searchbar');

let Click_ = false;
document.getElementById('isearch').addEventListener("click" , ()=>{
    if(Click_){
        searchbar.style.display = "none";
        Click_ = false;
    }else{
        searchbar.style.display = "";
        Click_ = true;
    }
},false);


searchbar.addEventListener("keyup" , ()=>{
    let x = document.getElementById("search").value.toLowerCase();
    // console.log(x);
    let search = products.filter(value => {
        let a = value.name.toLowerCase().includes(x);
        if(!a){
            document.getElementById(value.name).style.display = "none";
        }else{
            document.getElementById(value.name).style.display = "";
        }
        return a;
    });
    console.log(search);

    // CountInCart.textContent = getCountInCart(cart);
    //   alert(`${item.name} added!`);
    //   CookieUtil.set('ItemInCart', JSON.stringify(cart), Date(9000));
    //   CookieUtil.set('ItemCount', JSON.stringify(getCountInCart(cart)), Date(9000));
});

