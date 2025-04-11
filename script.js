//Seleciona os elementos do HTML com os quais vamos interagir
const form = document.getElementById('meuFormulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagemDiv = document.getElementById('mensagem');

//Adiciona um ouvinte para o evento de 'submit' do formulário
form.addEventListener('submit', function(event) {
    //Impede o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    //Limpa mensagens anteriores e remove classes de estilo
    mensagemDiv.textContent = '';//Limpa o texto
    mensagemDiv.classList.remove('sucesso', 'erro');//Remove classes de estilo

    //Pega os valores dos campos e converte para números
    //O parseFloat é para permitir números decimais, se necessário
    //Poderia ser parseInt se fossem apenas números inteiros
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);
    
    //Verifica se os valores são números válidos
    //Se um campo estiver vazio ou inválido, o parseFloat retorna NaN
    if(isNaN(valorA) || isNaN(valorB)) {
        mensagemDiv.textContent = 'Por favor, digite um número válido em ambos os campos.';
        mensagemDiv.classList.add('erro');
        return;//Para a execução aqui se os números não forem válidos
    }

    //Realiza a validação principal: B > A
    if(valorB > valorA) {

        //Exibe a mensagem de sucesso
        mensagemDiv.textContent = `Formulário válido! O segundo número (${valorB}) é maior que o primeiro número (${valorA}).`;
        mensagemDiv.classList.add('sucesso');

        //limpar os campos após sucesso
        campoA.value = '';
        campoB.value = '';

    }else {
         
        //Exibe a mensagem de erro
        mensagemDiv.textContent = `Formulário inválido! O segundo número (${valorB}) é menor que o primeiro número (${valorA}).`;
        mensagemDiv.classList.add('erro');

        //limpar os campos após sucesso
        campoA.value = '';
        campoB.value = '';
    }
});