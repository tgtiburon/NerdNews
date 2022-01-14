async function newpostBtnHandler() {
    //alert("in newpost");
    //  const response = await fetch('/dashboard/newpost/', {
    //      method: 'post',
    //      headers: { 'Content-Type': 'application/json' }
    //  });
    //  if (response.ok) {
         ;
        // alert("replace doc in logout");
 
    //  }else {
    //      alert(response.statusText);
    //  }

    document.location.replace('/dashboard/newpost/');
 }
 
 
 document.querySelector('#btn-new-post').addEventListener('click', newpostBtnHandler);