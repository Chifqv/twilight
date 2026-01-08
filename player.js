const backbtn = document.getElementById('back');


backbtn.addEventListener('click', (event)  => {
    const id = event.target.dataset.id; 

    window.location.href = `index.html?id=${id}`;
});