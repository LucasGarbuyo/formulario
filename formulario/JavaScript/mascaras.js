// Mascara CPF
function mascara_cpf(event){
    var cpf = document.getElementById('cpf')
    var tecla = event.keyCode;

    if(tecla != 8){
        if(cpf.value.length == 3 || cpf.value.length == 7){
            cpf.value += "."
        }
        else if(cpf.value.length == 11){
            cpf.value += "-"
        }
    }
}

//Mascara Telefone
function mascara_tel(event){
    var tel = document.getElementById("telefone");
    var tamanho = tel.value.length;
    var tecla = event.keyCode;

    if(tecla != 8){
        switch(tamanho){
            case 1 : 
                tel.value = "(" + tel.value;
                break;
            
            case 3 :
                tel.value = tel.value+ ")";
                break;
            
            case 9 :
                tel.value = tel.value+ "-";
        }
    }
}

//Função para aceitar apenas números
function somenteNumeros(event){
    var tecla = event.keyCode;

    if(tecla >= 48 && tecla <= 57){
        return true;
    }
    else{
        return false;
    }
}