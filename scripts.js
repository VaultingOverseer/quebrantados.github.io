// scripts.js

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso!");
        // Aqui você pode adicionar funcionalidades como envio de e-mail ou integração com back-end
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
