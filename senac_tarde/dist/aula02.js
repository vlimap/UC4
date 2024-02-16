"use strict";
// adicionando a variavel formulario ao id dele
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const dados = `
    Dados coletados:<br>
    Nome: ${nome}<br>
    CPF: ${cpf}<br>
    Email: ${email}<br>
    Data de nascimento: ${dataNascimento}<br>
    Telefone: ${telefone}
    `;
    const exibir = document.getElementById('resposta');
    if (exibir) {
        exibir.innerHTML = dados;
    }
});
