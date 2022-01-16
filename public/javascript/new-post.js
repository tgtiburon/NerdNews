// Clicked newpost  so redirect to /dashboard/newpost/
async function newpostBtnHandler() {
  
    document.location.replace('/dashboard/newpost/');
 }
 
 document.querySelector('#btn-new-post').addEventListener('click', newpostBtnHandler);