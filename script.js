
document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("openEnvelope");
    const envelope = document.getElementById("envelope");
    const intro = document.getElementById("intro");
    const message = document.getElementById("message");

    if (!button || !envelope || !intro || !message) {
        return;
    }

    button.addEventListener("click", function () {

        // Apri la busta
        envelope.classList.add("open");

        // Cambia il pulsante
        button.innerHTML = "❤️";

        // Impedisce altri click
        button.disabled = true;


        // Dopo l'apertura della busta
        setTimeout(function () {

            intro.classList.add("hide");

        }, 1400);


        // Mostra la pagina con il collegamento
        setTimeout(function () {

            message.classList.add("show");

        }, 1900);

    });

});
```
