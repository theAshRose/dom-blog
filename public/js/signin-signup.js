const router = require('express').Router();
console.log("succesion")

const logInPageBtn = document.querySelector('#logInPageBtn')

const logInValidate = async (event) => {
    event.preventDefault();
    window.alert("hey hey hey")
    
    const emailOrUsername = document.querySelector('#username_or_email-login').value.trim()
    const password = document.querySelector('#password-login').value.trim()

    if (!emailOrUsername && !password) {
        // try {
        //     const userData = await 
        // }


    } else {
        alert("hey hey hey")
    }


}

logInPageBtn.addEventListener(logInValidate())

module.exports = logInValidate;