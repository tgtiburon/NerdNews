// Gets comment text from textarea  and POSTS it to the db
async function commentFormHandler(event) {
    event.preventDefault();
    // get the comment text from the dom
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
    ];
    // no empty strings allowed
    if(comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST', 
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });


        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }

}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);