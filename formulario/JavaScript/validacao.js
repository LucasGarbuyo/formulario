function validacao(){
    var formulario = document.forms["cadastro"]
    var nome = formulario.nome.value
    var cpf = formulario.cpf.value
    var cep = formulario.cep.value
    var telefone = formulario.telefone.value
    var estado = formulario.estado.value

    var erro = false // Não tem erro

    //Validação do Nome
    if(nome.indexOf(" ") == -1){
        alert("Preencha o nome completo!")
        erro = true // Quando identifica um erro
    }

    //Validação do CPF
    if(cpf.length != 14){
        alert("Preencha o CPF corretamente!")
        erro = true
    }

    //Validação do CEP
    if(cep.length != 8){
        alert("Preencha o CEP corretamente!")
        erro = true
    }

    //Validação do Telefone
    if(telefone.length != 14){
        alert("Preencha o Telefone corretamente!")
        erro = true
    }

    //Validação do Estado
    if(estado.length != 2){
        alert("Preencha o Estado corretamente!")
        erro = true
    }

    if(erro){ // Se houver algum erro, retorna false
        return false
    }
    else{
        return true
    }
}

