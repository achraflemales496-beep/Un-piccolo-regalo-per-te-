
document.addEventListener("DOMContentLoaded", function () {

    const envelopeButton = document.getElementById("envelopeButton");
    const envelope = document.querySelector(".envelope");
    const intro = document.getElementById("intro");
    const message = document.getElementById("message");
    const tapText = document.getElementById("tapText");

    if (!envelopeButton || !envelope || !intro || !message) {
        console.error("Elementi della pagina non trovati.");
        return;
    }

    envelopeButton.addEventListener("click", function () {

        if (envelope.classList.contains("open")) {
            return;
        }

        envelope.classList.add("open");

        if (tapText) {
            tapText.textContent = "❤️";
        }

        setTimeout(function () {

            intro.classList.add("hide");

            setTimeout(function () {
                message.classList.add("show");
            }, 500);

        }, 1100);

    });

});
```
