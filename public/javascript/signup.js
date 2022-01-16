// Get username and password and POST to db to make new account
async function signupFormHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  // Make sure they have both username and password before checking
    if (username && password) {
      const response = await fetch('/api/users/', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      // check the response status
      if(response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }

    }
    

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);