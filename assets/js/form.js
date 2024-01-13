document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.spinner-container').style.display = 'flex';

    window.addEventListener('load', function() {
        document.querySelector('.spinner-container').style.display = 'none';
    });
});


document.getElementById('bouton').addEventListener('click', function() {
    window.location.href = 'index.html';
});
