// adicionando a variavel formulario ao id dele
const formulario = document.getElementById('formulario') as HTMLElement



formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = (document.getElementById('nome') as HTMLInputElement).value;

    const telefone = (document.getElementById('telefone') as HTMLInputElement).value;

    const dataNascimento = (document.getElementById('nasc') as HTMLInputElement).value;

    const cpf = (document.getElementById('cpf') as HTMLInputElement).value;

    const email = (document.getElementById('email') as HTMLInputElement).value;

    console.log(nome)
    console.log(telefone)
    console.log(dataNascimento)
    console.log(cpf)
    console.log(email)
});