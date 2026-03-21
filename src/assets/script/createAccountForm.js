
import { hashPassword } from "./passwordHash";

//Creating account function
export async function createAccount(formData){
    const { name, password, email, contact } = formData;
    const dateRegistered = new Date().toISOString();
    
    // showError(email);
     if (!validateEmail(email)) {
        return { error: "Invalid email" };
    }
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const existingUser = users.find(user =>user.userMail === email);
    if (existingUser) {
        alert("Email already registered");
        return;
    }
    const hashedPass = await hashPassword(password.trim());
    const userRegister = {
        registryID: Date.now(),
        userName: name,
        userPassword: hashedPass,
        userMail: email,
        userContact: contact,
        dateRegistery: dateRegistered,
        cart: []
    };
    users.push(userRegister);
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    return { success: true };
}

//Warning error for wrong email format
export function showError(email) {
    document.querySelectorAll("small.error").forEach(el => el.textContent = ""); 
    document.querySelectorAll("input").forEach(el => el.classList.remove("error-border"));
    if (!validateEmail(email.value)) {
        const error = email.parentElement.querySelector("small.error"); //parentElement is the container where small belong to
        if (error) {
            error.textContent = "Enter a valid email";
        }
        email.classList.add("error-border");
    }
}

//Email validator
export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email)
}