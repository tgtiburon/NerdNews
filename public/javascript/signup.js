
function signupFormHandler(event) {
    event.preventDefault();
    

    const username = document.querySelector('#username-signup').value.trim();
   // const email = document.querySelector('#email-signup').value.trim();
   // const email = "test@test.com";
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
        //  email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {console.log(response)})
    }

   // console.log('In signupFormHandler');
   // console.log(body);

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);