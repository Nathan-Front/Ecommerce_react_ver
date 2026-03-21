import {hashPassword} from "./passwordHash"

//Loggin account function
export async function LoginAccount(formData){
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const {userName, userPassword} = formData;
    const hashedInput = await hashPassword(userPassword);
    const existUser = users.find(user => user.userName === userName && user.userPassword === hashedInput);
    if(existUser){
        localStorage.setItem("loggedUser", JSON.stringify({
            user: existUser,
        }));
        return { success: true, user: existUser};
    }else{
         return { error: "Invalid username or password" };
    }
}
export async function rememberMe(check, user){
    if (check) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("loggedUser");
    }
    return { success: true };
}


//For long user name at hover tooltip display
 export function hoverLongNameUsers(){
    const userNameHover = document.querySelector('.user-name-logged');
    userNameHover.addEventListener('mouseenter', () => {
        if(userNameHover.scrollWidth > userNameHover.clientWidth){ //if the logged user name is longer than the displayed
            userNameHover.title = userNameHover.textContent; //Display the full user name
        }else{
            userNameHover.removeAttribute('title');
        }
    });
}


//Forgot password
export function forgotPassword(){
    const forgotPassBtn = document.getElementById("forgot-password");
    forgotPassBtn.addEventListener("click", ()=>{
        alert("Link to forgot password form");
    });
}