// JavaScript Document
window.onload = function () {
    // Obtener todos los pasos y botones "Siguiente"
    var pasos = document.querySelectorAll(".paso");
    var btnNext = document.querySelectorAll(".btn-next");

    for (var i = 0; i < btnNext.length; i++) {
        (function (index) {
            btnNext[index].onclick = function () {
                // Ocultar el paso actual
                pasos[index].classList.add("hidden");

                // Mostrar el siguiente paso o la confirmación
                if (pasos[index + 1]) {
                    pasos[index + 1].classList.remove("hidden");
                } else {
                    // Si es el último paso, mostrar confirmación (Paso 6)
                    var confirmacion = document.getElementById("paso6");
                    if (confirmacion) {
                        confirmacion.classList.remove("hidden");
                    }
                }
            };
        })(i);
    }

    // Contadores para los boletos y alimentos
    var counters = document.querySelectorAll(".contador");
    var btnMinus = document.querySelectorAll(".btn-minus");
    var btnPlus = document.querySelectorAll(".btn-plus");

    for (var j = 0; j < btnMinus.length; j++) {
        (function (index) {
            // Botón "menos"
            btnMinus[index].onclick = function () {
                var current = parseInt(counters[index].textContent, 10);
                if (current > 0) {
                    counters[index].textContent = current - 1;
                }
            };

            // Botón "más"
            btnPlus[index].onclick = function () {
                var current = parseInt(counters[index].textContent, 10);
                counters[index].textContent = current + 1;
            };
        })(j);
    }
};
