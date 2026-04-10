const form = document.getElementById('formCadastro');
const input_nome = document.getElementById('nome');
const input_email = document.getElementById('email');
const input_phone = document.getElementById('phone');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const untrimmedphone = input_phone.value
    const data = {
    nome: input_nome.value.trim(),
    email: input_email.value.trim(),
    phone: input_phone.value.replace(/\D/g, '') 
    };
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
    alert(
        `Dados cadastrados: \nNome: ${data.nome} \nEmail: ${data.email}\nTelefone: ${untrimmedphone}`);
}
);
/* reutilizado*/
input_phone.addEventListener('input', function () {
    let numbers = input_phone.value.replace(/\D/g, '');

    if (numbers.startsWith("55")) {
        numbers = numbers.slice(2);
    }

    numbers = numbers.substring(0, 11);

    let formatted = "+55 ";

    if (numbers.length > 0) {
        formatted += numbers.substring(0, 2);
    }

    if (numbers.length > 2) {
        formatted += " " + numbers.substring(2, 7);
    }

    if (numbers.length > 7) {
        formatted += "-" + numbers.substring(7, 11);
    }

    input_phone.value = formatted;
});