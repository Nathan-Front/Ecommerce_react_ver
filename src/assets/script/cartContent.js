
//Payment
export function paymentSummary(){
   const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) {
      alert("Login is needed");
      return;
    }
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const userIndex = users.findIndex(
      (user) => user.registryID === loggedUser.registryID,
    );
    if (userIndex === -1) return;

    const cart = users[userIndex].cart || [];
    const totalPrice = cart.reduce((sum, item) => sum + item.total, 0); //array.reduce((accumulator, currentItem) => {return newValue;}, initialValue);
    alert("Total balance is: $" + totalPrice.toFixed(2));
}