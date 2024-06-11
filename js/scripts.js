function copymail(element) {
    // Copiar texto al portapapeles
    if (navigator.clipboard) {
        navigator.clipboard.writeText(element.innerText).then(function() {
            showMessage();
        }, function(err) {
            console.error('No se pudo copiar el texto: ', err);
        });
    } else {
        const tempInput = document.createElement('input');
        tempInput.value = element.innerText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showMessage();
    }
}

function showMessage() {
    const copyBox = document.getElementById('copytext');
    copyBox.classList.add('show');

    // Quitar la clase después de 2 segundos (2000 milisegundos)
    setTimeout(() => {
        copyBox.classList.remove('show');
    }, 800);
}