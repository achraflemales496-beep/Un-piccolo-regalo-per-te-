
/* =========================================================
   ELEMENTI
========================================================= */

const envelopeButton = document.getElementById("envelopeButton");
const envelope = document.querySelector(".envelope");
const intro = document.getElementById("intro");
const message = document.getElementById("message");
const tapText = document.getElementById("tapText");


/* =========================================================
   APERTURA DELLA BUSTA
========================================================= */

envelopeButton.addEventListener("click", () => {

    // Evita che possa essere premuta più volte
    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    tapText.textContent = "❤️";


    // Dopo l'animazione della busta,
    // mostra il messaggio finale
    setTimeout(() => {

        intro.classList.add("hide");

        setTimeout(() => {
            message.classList.add("show");
        }, 500);

    }, 1100);

});
```
