//item selected in react
export function addToCart(item, size, qty) {
  const selectedItem = {
    id: item.id,
    itemN: item.name,
    seller: item.seller,
    itemImg: item.img,
    itemPrice: item.price,
    itemSize: size,
    qty: qty,
    totalPrice: item.price * qty,
  };

  addItemToCart(selectedItem);
}

//Add to cart, use the function above
export function addItemToCart(selectedItem){
    const cart = getCartStorage();
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



