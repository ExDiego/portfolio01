function copymail(element) {
    // Obtener el elemento hover-box dentro del elemento clicado
    const hoverBox = element.querySelector('.hover-box');
    // Log para verificar que el hover-box se ha seleccionado
    console.log('hoverBox:', hoverBox);
    
    // Si se encuentra el elemento hover-box, ocultarlo
    if (hoverBox) {
        hoverBox.classList.add('hidden');
        // Log para verificar que el hover-box se ha ocultado
        console.log('hoverBox oculto');
    }


    
    // Obtener solo el texto del correo electrónico, excluyendo el span interno
    const emailText = element.childNodes[0].textContent.trim();

    // Copiar texto al portapapeles
    if (navigator.clipboard) {
        navigator.clipboard.writeText(emailText).then(function() {
            showMessage();
        }, function(err) {
            console.error('No se pudo copiar el texto: ', err);
        });
    } else {
        const tempInput = document.createElement('input');
        tempInput.value = emailText;
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

    // Quitar la clase después de 850 milisegundos
    setTimeout(() => {
        copyBox.classList.remove('show');
    }, 850);
}


//Alerta coipado

/* function copyEmail() {

    var alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'inline-block';

    setTimeout(function() {
        alertBox.style.display = 'none';
    }, 3000);
} */



/* function showMessage() {
    // Mostrar la alerta
    var alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'inline-block';
    alertBox.style.bottom = '20px';

    // Ocultar la alerta después de 3 segundos
    setTimeout(function() {
        alertBox.style.bottom = '-50px';
        setTimeout(function() {
            alertBox.style.display = 'none';
        }, 500); // Esperar a que la transición termine antes de ocultar el div
    }, 3000);
} */