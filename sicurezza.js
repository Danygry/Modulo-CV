function sanitizeInput(input) {
    // Rimuove eventuali tag HTML o script dannosi
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function sanitizeForm() {
    // Seleziona tutti gli input che devono essere sanificati
    var nome = document.getElementById('nome');
    var cognome = document.getElementById('cognome');
    var email = document.getElementById('email');
    var telefono = document.getElementById('telefono');
    var ruolo = document.getElementById('ruolo');

    // Sanifica i valori inseriti
    nome.value = sanitizeInput(nome.value);
    cognome.value = sanitizeInput(cognome.value);
    email.value = sanitizeInput(email.value);
    telefono.value = sanitizeInput(telefono.value);
    ruolo.value = sanitizeInput(ruolo.value);

    // Aggiungi ulteriori controlli e validazioni, se necessario

    return true; // Consente l'invio del modulo
}
