const treilerbtn = document.getElementById('treiler');

treilerbtn.addEventListener('click', (event)  => {
    const id = event.target.dataset.id; 

    window.location.href = `player.html?id=${id}`;
});

