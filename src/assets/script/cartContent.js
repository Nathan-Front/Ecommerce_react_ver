
//Payment
export function paymentSummary(){
   const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) {
      const tempCart = JSON.parse(localStorage.getItem("tempCartContent")) || [];
      if(tempCart.length <= 0){
        alert("No item in cart");
        return;
      } else {
        alert("Login is needed");
        return;
      }
      
    }
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const userIndex = users.findIndex(
      (user) => user.registryID === loggedUser.registryID,
    );
    if (userIndex === -1) return;

    const cart = users[userIndex].cart || [];
    if(cart.length <= 0){
      alert("No item in cart");
      return;
    }
    const totalPrice = cart.reduce((sum, item) => sum + item.total, 0); //array.reduce((accumulator, currentItem) => {return newValue;}, initialValue);
    alert("Total balance is: $" + totalPrice.toFixed(2));
}