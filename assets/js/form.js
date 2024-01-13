document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.spinner-container').style.display = 'flex';

    window.addEventListener('load', function () {
        document.querySelector('.spinner-container').style.display = 'none';
    });
});

const errorMessage = document.createElement('div');
    const noms = document.getElementById("text")
    const bouton = document.getElementById('labelMonInput')

document.getElementById('bouton').addEventListener('click', function () {
    const nom = document.getElementById("text").value
    if (nom === "") {
        errorMessage.textContent = 'Champ invalide. Veuillez entrer une valeur valide.';
        errorMessage.style.color = 'red';
        errorMessage.style.position = 'absolute';
        errorMessage.style.fontSize = '12px';
        errorMessage.style.bottom = '-50%';
        errorMessage.style.left = '0%';
        noms.parentNode.appendChild(errorMessage);

        bouton.style.cursor = none
    }else{
        window.location.href = 'hbirthday.html';
    }

    
});

