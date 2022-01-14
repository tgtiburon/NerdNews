async function logout() {
   alert("in logout");
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/');
       // alert("replace doc in logout");

    }else {
        alert(response.statusText);
    }
}


document.querySelector('#logout').addEventListener('click', logout);