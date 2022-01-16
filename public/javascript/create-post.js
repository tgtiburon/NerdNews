// Gets title and content from user and posts it to DB
async function createPostHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value;
      // Need both title and content to post
    if(title && post_content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.new-post-form').addEventListener('submit', createPostHandler);