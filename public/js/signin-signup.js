




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
      
    }
  }
};

const signUpUsers = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#signUpUser').value.trim();
  const email = document.querySelector('#signUpEmail').value.trim();
  const password = document.querySelector('#signUpPassword').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/user_routes/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      location.replace('/home');
    } else {
      alert('DIE DIE');
    }
  }
};

const logOutUser = async (event) => {
  // event.preventDefault()
  const response = await fetch('/api/user_routes/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    
    location.replace('/');
  } else {
    alert('the Rats are blending YOU today, junior')
  }
};



$('#logOutBtn').on("click", logOutUser)

$('#logInPageBtn').on("click", logInValidate)

$('#signUpForm').on("submit", signUpUsers)