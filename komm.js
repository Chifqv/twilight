const form = document.getElementById('comment-form');
const input = document.getElementById('comment-input');
const list = document.getElementById('comments-list');



let firstCommentFlag = localStorage.getItem('firstCommentFlag') || '0'; 



//ЗАГРУЖАЕМ КОММЕНТЫ ЕСЛИ БЫЛИ ЕСЛИ НЕ БЫЛО ТО ПУСТОЙ СПИСОК
let comments = JSON.parse(localStorage.getItem('comments')) || [];

//СОХРАНЕНИЕ
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');     
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();                          
    return `${day}.${month}.${year}`;
}


//ПОКАЗ КОММЕНТОВ
function showComments() {
    list.innerHTML = '';
    
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="common-card">
                <div class="comment-header">

                    <div class="comment-info">
                        <span class="comment-author">${comment.author || localStorage.getItem('userName') || 'Аноним'}</span>
                        <span class="comment-time">${comment.time}</span>
                    </div>
                    
                    <div class="comment-actions">
                        <button class="edit-btn" data-id="${comment.id}">Редактировать</button>
                        <button class="delete-btn" data-id="${comment.id}">Удалить</button>
                    </div>

                </div>
                <div class="comment-text">${comment.text}</div>
            </div>
            
        `;
        list.appendChild(div);
    });
}

//ДОБАВЛЕНИЕ КОММЕНТА
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (input.value.trim()==='') {
        input.value='';
        return;
    }
    

    if (firstCommentFlag === '0') {
        window.location.href = 'name.html';
        input.value='';
        return; 
    }
    
    
    const now = new Date();
    const timeString = formatDate(now);
    
    
    comments.push({
        id: Date.now(),
        text: input.value,
        time: timeString,
        author: localStorage.getItem('userName') 
    });
    
    updateAndShowComments();
    input.value = '';
       
});

//РЕДАКТИРОВАНИЕ И УДАЛЕНИЕ
list.addEventListener('click', function(e) {
    const btn = e.target;
    const id = Number(btn.dataset.id);
    
    if (btn.classList.contains('edit-btn')) {
        const comment = comments.find(c => c.id === id);
        if (comment) {
            const newText = prompt('Редактировать:', comment.text);
            if (newText !== null) {
                comment.text = newText.trim();
                const now = new Date();
                comment.time = formatDate(now);
                
                updateAndShowComments();
            }
        }
    }
    
    if (btn.classList.contains('delete-btn')) {
        if (confirm('Удалить?')) {
            comments = comments.filter(c => c.id !== id);
            updateAndShowComments();
        }
    }
});


function updateAndShowComments() {
    saveComments();
    showComments();
}


showComments();