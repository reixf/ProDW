document.addEventListener("DOMContentLoaded", function () {
    var dayButtons = document.querySelectorAll(".day-btn");
    var dayContents = document.querySelectorAll(".day-content");

    // Cambiar entre días
    for (var i = 0; i < dayButtons.length; i++) {
        dayButtons[i].addEventListener("click", function () {
            // Cambiar la clase activa
            for (var j = 0; j < dayButtons.length; j++) {
                dayButtons[j].classList.remove("active");
            }
            this.classList.add("active");

            // Mostrar contenido correspondiente
            var selectedDay = this.getAttribute("data-day");
            for (var k = 0; k < dayContents.length; k++) {
                if (dayContents[k].id === selectedDay) {
                    dayContents[k].classList.remove("hidden");
                } else {
                    dayContents[k].classList.add("hidden");
                }
            }
        });
    }
});
