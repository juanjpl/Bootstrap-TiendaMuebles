/**********************************************************************

                    Script validacion Bootstrap

**********************************************************************/

// script extraido desde la pagina oficial de Bootstrap

//  https://getbootstrap.com/docs/4.0/components/forms/

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    "use strict";
    window.addEventListener("load", function() {
        // Seleccionar el formulario
        var forms = document.getElementsByClassName("needs-validation");
        // Validar cada campo
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                } else {
                    var nombre = document.getElementById("nombre").value,
                        email = document.getElementById("email").value,
                        mensaje = document.getElementById("mensaje").value;

                    console.log(nombre);
                    console.log(email);
                    console.log(mensaje);

                    var xhr = new XMLHttpRequest();

                    xhr.open("POST", "http://localhost/Karolina-Spa/enviar.php", true);

                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.onload = function() {
                            if (xhr.status === 200) {
                                var respuesta = JSON.parse(xhr.responseText);
                                console.log(respuesta);
                                if (respuesta.respuesta === true) {
                                    var div = document.createElement("div");
                                    /* Esto faltaba */
                                    document.body.appendChild(div);
                                    div.appendChild(document.createTextNode("Se envió correctamente"));
                                }
                            }
                        }
                        /* Aquí todo manual por simplificar*/
                    xhr.send("nombre =" + nombre + "&email=" + email + "&mensaje=" + mensaje);

                }
                form.classList.add("was-validated");
            }, false);
        });
    }, false);
})();