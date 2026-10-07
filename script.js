const bouton = document.querySelector(".btn");
const description = document.querySelector("#description");

const formulaire = document.querySelector("#contactForm");
const champNom = document.querySelector("#nom");


// Bouton "En savoir plus"

bouton.addEventListener("click", function() {
    description.textContent =
        "Bienvenue ! Tu viens de modifier cette page avec JavaScript.";
});

// Formulaire Contact

const champEmail = document.querySelector("#email");
const champMessage = document.querySelector("#message");
const formMessage = document.querySelector("#formMessage");

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    if (champNom.value.trim() === "") {

        formMessage.textContent =
            "Veuillez entrer votre nom.";

        return;
    }

    if (champEmail.value.trim() === "") {

        formMessage.textContent =
            "Veuillez entrer votre adresse e-mail.";

        return;
    }

    if (champMessage.value.trim() === "") {

        formMessage.textContent =
            "Veuillez écrire un message.";

        return;
    }

    formMessage.textContent =
        "Merci " + champNom.value +
        " ! Votre message a bien été préparé.";

    formulaire.reset();

});