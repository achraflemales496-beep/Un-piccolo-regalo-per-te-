
document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("openEnvelope");
    const envelope = document.getElementById("envelope");
    const intro = document.getElementById("intro");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {

        // Apre la busta
        envelope.classList.add("open");

        // Cambia il testo del pulsante
        button.textContent = "❤️";

        // Disabilita il pulsante
        button.disabled = true;

        // Nasconde la prima schermata
        setTimeout(() => {
            intro.classList.add("hide");
        }, 1200);

        // Mostra il messaggio
        setTimeout(() => {
            message.classList.add("show");
        }, 1800);

    });

});
```
