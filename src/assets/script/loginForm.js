import {hashPassword} from "./passwordHash"

//Loggin account function
export async function LoginAccount(formData){
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const {userName, userPassword} = formData;
    const hashedInput = await hashPassword(userPassword);
    const existUser = users.find(user => user.userName === userName && user.userPassword === hashedInput);
    if(existUser){
        localStorage.setItem("loggedUser", JSON.stringify(existUser));
        return { success: true, user: existUser};
    }else{
         return { error: "Invalid username or password" };
    }
}

export async function rememberMe(check, user){
    if (check) {
      localStorage.setItem("rememberMe", JSON.stringify(user));
    } else {
      localStorage.removeItem("rememberMe");
    }
    return { success: true };
}


