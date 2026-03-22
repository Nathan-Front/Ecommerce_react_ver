async function fetchProducts(){
    const itemContainer = document.querySelector(".item-panel");
    const resClothe = await fetch("./product/clothes.html");
    const clotheHTML = await resClothe.text();
    itemContainer.innerHTML += clotheHTML;
    const resShoes = await fetch("./product/shoes.html");
    const shoesHTML = await resShoes.text();
    itemContainer.innerHTML += shoesHTML;
    const resOffers = await fetch("./product/bestOffers.html");
    const offersHTML = await resOffers.text();
    itemContainer.innerHTML += offersHTML;
    const resOutdoor = await fetch("./product/outdoor.html");
    const outdorrHTML = await resOutdoor.text();
    itemContainer.innerHTML += outdorrHTML;
}

//Add to cart function (Clothe and shoes). Event delegation
export function addItemToCart(selectedItem){
    const cart = getCartStorage();
       // const itemToCart = JSON.parse(localStorage.getItem("cartContent")) || [];
    const existingItem = cart.find(
        item => item.id === selectedItem.id && item.size === selectedItem.itemSize //Search same item with same size selected
    ); 
    if(existingItem){
        existingItem.qty += selectedItem.qty; //Adding of quantity
        existingItem.total += selectedItem.totalPrice; //Total price of item
    }else{
        cart.push({
            id: selectedItem.id,
            name: selectedItem.itemN,
            seller: selectedItem.seller,
            img: selectedItem.itemImg,
            price: Number(selectedItem.itemPrice),
            size: selectedItem.itemSize,
            qty: selectedItem.qty,
            total: selectedItem.totalPrice
        });
    }
    saveToCartStorage(cart);
    /*    alert("Added to cart");
        saveToCartStorage(cart); //Add the item in here
        updateCartCounter();
        fetchCartContent();*/
   // })
}
//To load curtent cart
export function getCartStorage() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) {
        const userData = locateCartOfUser();
        if (!userData) return [];
        return userData.users[userData.userIndex].cart || [];
    } else {
        return JSON.parse(localStorage.getItem("tempCartContent")) || [];
    }
}
//finding the user in the user registry
export function locateCartOfUser(){
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if(!loggedUser) return;
    let users = JSON.parse(localStorage.getItem("registeredUsers"));
    if(!Array.isArray(users)) users = [];
     const userIndex = users.findIndex(
        user => String(user.registryID) === String(loggedUser.registryID)
    ); //Compare logged user Id in registeredUsers
    if (userIndex === -1) return;
    users[userIndex].cart = users[userIndex].cart || [];
    return { users, userIndex };
}

//To store cart to the logged user or temporary cart
export function saveToCartStorage(itemToCart) {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if(loggedUser){ //Cart of logged user
        const userData = locateCartOfUser(); //Use registeredUsers cart array
        if(!userData) return;
        let {users, userIndex} = userData;
        users[userIndex].cart = itemToCart;
        localStorage.setItem("registeredUsers", JSON.stringify(users));
    }
    else{ //Temporary cart for logged out user
        localStorage.setItem("tempCartContent", JSON.stringify(itemToCart));
    }
}


//For cart counter
export function updateCartCounter(){
    //const cart = JSON.parse(localStorage.getItem("cartContent")) || [];
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const tempCart = JSON.parse(localStorage.getItem("tempCartContent"));
    let cart = [];
    if(loggedUser){
        const userData = locateCartOfUser(); //Use registeredUsers cart array
        if(!userData) return;
        let {users, userIndex} = userData;
        cart = users[userIndex].cart || [];
    }else{
        cart = tempCart || [];
    }
    let totalItems = 0;
    cart.forEach(item=>{
        totalItems += item.qty;
    });
    const mobileCartCounter = document.querySelector(".cart-counter");
    const cartCounter = document.getElementById("added-to-cart");
    if(mobileCartCounter){
        mobileCartCounter.textContent = totalItems;
    }
    if(cartCounter){
        cartCounter.textContent = totalItems;
    }
}


//Combine items from temporary to the cart of users when logging in
export function mergeCartOnLogin(){
    const tempCart = JSON.parse(localStorage.getItem("tempCartContent")) || [];
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if(!loggedUser || tempCart.length === 0) return;
    const userData = locateCartOfUser(); //Use registeredUsers cart array
    if(!userData) return;
    let {users, userIndex} = userData;
    if(userIndex === -1) return;
    users[userIndex].cart = users[userIndex].cart || [];
    tempCart.forEach(tempItem =>{
        const existingItem = users[userIndex].cart.find(item =>
            item.id === tempItem.id &&
            item.size === tempItem.size
        );
        if(existingItem){
            existingItem.qty += tempItem.qty;
            existingItem.total = existingItem.qty * existingItem.price;
        }else{
            users[userIndex].cart.push(tempItem); //If different add new item
        }
    });
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    localStorage.removeItem("tempCartContent");
}


//For bestoffer and outdoors content
function otherProduct(){
    document.addEventListener("click", (e)=>{
        const btn = e.target.closest(".other-offer-button");
        const popup = document.querySelector(".popup-wrap");
        //If clicking a product button
        if(btn){
            const itemImg = btn.querySelector(".other-img").src;
            if(popup) popup.remove();
            const container = document.createElement("div");
            container.classList.add("popup-wrap");
            const closePop = document.createElement("button");
            closePop.classList = "Close-popup-container";
            closePop.textContent = "Close";
            const img = document.createElement("img");
            img.classList.add("popup-image","popup-img");
            img.src = itemImg;
            container.appendChild(img);
            container.appendChild(closePop);
            document.body.append(container);
            document.body.classList.add("no-scroll");
            const overlay = document.getElementById("overlay");
            overlay.classList.toggle("cover");
            closePopup();
            return;
        }
    });
}
function closePopup(){
    const closeBtn = document.querySelector(".Close-popup-container");
    if(!closeBtn) return;
    closeBtn.addEventListener("click", (e)=>{
        e.target.closest(".popup-wrap").remove();
        closeAll();
    });
}

function otherProductLinks(){
    document.addEventListener("click", (e) =>{
        const btn = e.target;
        const linkWrap = btn.closest(".item-panel-lower-link");
        if(!linkWrap) return;
        const linkContent = linkWrap.querySelector(".lower-panel-item-card-links").textContent;
        alert("Link to " + `${linkContent}` + " page");
            
    });
}