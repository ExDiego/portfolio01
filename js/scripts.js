/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function copymail(element) {
    const tempInput = document.createElement('input');
            // Asignar el texto del elemento al valor del input temporal
            tempInput.value = element.innerText;
            // Agregar el input temporal al body
            document.body.appendChild(tempInput);
            // Seleccionar el contenido del input temporal
            tempInput.select();
            // Ejecutar el comando de copiar
            document.execCommand('copy');
            // Eliminar el input temporal del DOM
            document.body.removeChild(tempInput);
            // Mostrar una alerta para indicar que el texto ha sido copiado
            /* alert('Texto copiado: ' + tempInput.value); */
}