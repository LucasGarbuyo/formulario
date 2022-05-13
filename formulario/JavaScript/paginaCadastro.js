'use strict';

// Variavel que recebe uma arrow, que recebe um endereço e não retorna nada pois ele vai fazer uma ação
// Função para limpar o formulario antes de ser preenchido
const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = ''; 
    document.getElementById('bairro').value = ''; 
    document.getElementById('cidade').value = ''; 
    document.getElementById('estado').value = ''; 
}

// Variavel que recebe uma arrow, que recebe um endereço e não retorna nada pois ele vai fazer uma ação
const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro; // O logradouro é o nome que foi dado pela API do site
    document.getElementById('bairro').value = endereco.bairro; // O bairro é o nome que foi dado pela API do site 
    document.getElementById('cidade').value = endereco.localidade; // O localidade é o nome que foi dado pela API do site
    document.getElementById('estado').value = endereco.uf; // O UF é o nome que foi dado pela API do site 
}

const eNumero = (numero) => /^[0-9]+$/.test(numero); // Essa função verifica se todos os 8 digitos no cep são numeros

// Variavel que vai receber uma arrow, que vai receber como argumento um CEP e vai retornar true ou false e quando receber true ele executa a pesquisa
const cepValido = (cep) => cep.length == 8 && eNumero(cep); // Verifica se tem os 8 numeros e se tem letras

// pesquisarCep recebe uma arrow que retorna o valor do CEP
const pesquisarCep = async() => {

    limparFormulario(); // Toda vez que for pesquisar o campo CEP ele vai limpar os campos antes

    const cep = document.getElementById('cep').value; // Recebe o valor que esta dentro do inbox com id de cep
    const url = `http://viacep.com.br/ws/${cep}/json/`; // Por cep ser dimanico é preciso usar template string nesse caso
    
    // Validação do CEP
    // Se o CEP for válido ee executa o código
    if(cepValido(cep)){
        const dados = await fetch(url); // Recebendo os resultados do fetch
        const endereco = await dados.json(); // Pegando os dados e aplicando a função json

        // Verifica se o objeto endereço tem esse atributo/propriedade ERRO e precisa ser tratado
        // Se der algum erro, ele avisa o usuario
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        } 
        // Se não tiver erro ele preenche o formulario
        else {
            preencherFormulario(endereco);
        }
    }
    else{
        document.getElementById('endereco').value = 'CEP incorreto! Tente novamente';
    }
        
}

// Vai no documento e pega o elemento cujo o ID é cep no HTML, e nesse cara vai adicionar um evento para "Escutar" o que esta acontecendo e neste caso ele vai escutar quando "Perder o Foco" da caixa do CEP e quando ele sair do foco ele vai executar a função 'pesquisarCep' que vai pesquisar ele. 
document.getElementById('cep').addEventListener('focusout',pesquisarCep); // Pega o meu elemento 'cep', quando sair do foco aciona a função 'pesquisarCep'.