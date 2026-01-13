const nameInput = document.getElementById('name-input');
const form_name = document.getElementById('registration-form');


form_name.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        
        if (name==="") {
            nameInput.value="";
            return;
        }
        localStorage.setItem('userName', name);
        localStorage.setItem('firstCommentFlag', '1');
        window.location.href = 'komm.html';
    });