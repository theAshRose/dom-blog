
const logInValidate = async (event) => {
    event.preventDefault();
    console.log("step 1")
    const username = document.querySelector('#user-login').value.trim()
    const password = document.querySelector('#password-login').value.trim()

    if (username && password) {
        console.log("step 2")
        const response = await fetch('/api/user_routes/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            alert("finish me if you dare")
            console.log(response)
            location.replace('/home');
        } else {
            alert("die die")
        }
    }
};

document.querySelector('#logInPageBtn').addEventListener("click", logInValidate)



// const router = require('express').Router();

// const logInPageBtn = document.querySelector('#logInPageBtn')

// function logInValidate() {

//     const thefunction = async (event) => {
//         event.preventDefault();
//         const emailOrUsername = document.querySelector('#username_or_email-login').value.trim()
//         const password = document.querySelector('#password-login').value.trim()
//         try {

//           if (!emailOrUsername && !password) {
//                 // try {
//                 //     const userData = await
//                 // }


//             } else {
//                 alert("hey hey hey")
//             }

//         } catch (err) {
//             res(500).json(err)
//         }

//     };thefunction();
// }
// logInPageBtn.addEventListener("click", logInValidate())

// module.exports = router, logInValidate;