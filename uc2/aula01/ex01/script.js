document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome && email && mensagem) {
        alert(`Mensagem enviada com sucesso!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
