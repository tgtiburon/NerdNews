async function loginFormHandler(event) {
    event.preventDefault();
    //alert("In login");

   
   const username = document.querySelector('#username-login').value.trim();
   const password = document.querySelector('#password-login').value.trim();

   if (username && password) {
       const response = await fetch('/api/users/login', {
           method: 'post',
           body: JSON.stringify({
               username,
               password
           }),
           headers: { 'Content-Type': 'application/json'}
       });

       if (response.ok) {
           console.log("Already logged in")
          
          // document.location.replace('/');
           // TODO: not sure I want this
           document.location.replace('/dashboard');
       } else {
           alert(response.statusText);
       }
   }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);