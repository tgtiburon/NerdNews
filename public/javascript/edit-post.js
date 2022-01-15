async function editFormHandler(event) {
    event.preventDefault();


     // On form submission it grabs the post title and url 
    
     const title = document.querySelector('input[name="post-title"]').value;
     const post_content = document.querySelector('#content-body').value;
    
     // get id number   dashboard/edit/21     
     const id = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
    ];
    //alert(title);
    // alert(post_content);

    const response = await fetch(`/api/posts/${id}`, {
        method:'PUT', 
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok)     {
        document.location.replace('/dashboard');
    } else {
        alert("uh oh");
        alert(response.statusText)  ;
    }
  
  
  }
  
  document.querySelector('.update-post-btn').addEventListener('click', editFormHandler);