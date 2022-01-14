//const { response } = require("express");

async function deleteFormHandler(event) {
    event.preventDefault();

    // Pull the id from the url
    const id = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
    ];

//alert(id);
    const response = await fetch(`/api/posts/${id}`, {
        method:'DELETE',
    });


    if (response.ok)     {
        document.location.replace('/dashboard');
    } else {
        alert("uh oh");
        alert(response.statusText)  ;
    }
  
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);