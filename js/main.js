const form = document.getElementById('formCadastro');
const input_nome = document.getElementById('nome');
const input_email = document.getElementById('email');
const input_phone = document.getElementById('phone');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const data = {
        nome: input_nome.value.trim(),
        email: input_email.value.trim(),
        phone: input_phone.value.trim()
    };

    // Validação simples
    if (!data.nome || !data.email || !data.phone) {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.className = "error";
        return;
    }

    if (!data.email.includes("@")) {
        mensagem.textContent = "Email inválido!";
        mensagem.className = "error";
        return;
    }

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.className = "success";

    console.log("Dados cadastrados:", data);
    form.reset();
});