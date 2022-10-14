var opcoes = document.querySelector('#opcoes')
var incremento = document.querySelector('#incremento')
var mensagem = document.getElementById('tex')
var alfa = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
var cod = document.getElementById('cod')
var decod = document.querySelector('#decod')
var menCod = document.querySelector('.menCod')
var p = document.querySelector('p')
/* var p = document.createElement('p') */


//CHANGE PARA QUANDO SELECIONAR A OPCÃO APARECER OU NÃO O INCREMENTO

opcoes.addEventListener("change", function(){
    if (opcoes.value == 'cesar'){
        incremento.style.display = 'block';
        p.style.display = 'block'
    }
    else if (opcoes.value == 'base'){
        incremento.style.display = 'none'
    }
    else {
        alert('escolhe um dos dois ai doidão')
    }
})

//CIFRA DE CESAR

function codeCesar (){
    var mensagemValue = mensagem.value;
    var mensagemMinuscula = mensagemValue.toLowerCase(); 
    var numeroEscolhido = (Number(incremento.value) % 26);
    var mensagemCodificada = '';
    
    for(var i = 0; i < mensagemMinuscula.length; i++){
        for(var j = 0; j < alfa.length; j++){
            if(mensagemMinuscula[i] == alfa[j]){
                mensagemCodificada += alfa [j + numeroEscolhido]
                break;
            } else if (mensagemMinuscula[i] == ' ') {
                mensagemCodificada += ' ';
                break;
            }
        }
    }
return mensagemCodificada

};

function decoCesar (){
    var mensagemValue = mensagem.value;
    var mensagemMinuscula = mensagemValue.toLowerCase(); 
    var numeroEscolhido = (Number(incremento.value) % 26);
    var mensagemCodificada = '';
    
    for(var i = 0; i < mensagemMinuscula.length; i++){
        for(var j = 0; j < alfa.length; j--){
            if(mensagemMinuscula[i] == alfa[j]){
                mensagemCodificada += alfa [j - numeroEscolhido]
                break;
            } else if (mensagemMinuscula[i] == ' ') {
                mensagemCodificada += ' ';
                break;
            }
        }
    }
return mensagemCodificada

};

//BASE64 


function baseCod (){
    var codficado64 =  btoa(mensagem.value)
    return codficado64
};

function baseDeco (){
    var decodficado64 = atob(mensagem.value)
    return decodficado64
};





cod.addEventListener("click", function(){
    p.style.display = 'block'
    if(opcoes.value === "cesar"){
        p.innerHTML = codeCesar()
        
    }
    else if(opcoes.value === "base") {
        p.innerHTML = baseCod()
        
    }
})

decod.addEventListener("click", function(){
    p.style.desplay = 'block'
    if(opcoes.value === "cesar"){
        p.innerHTML = decoCesar()
        
    }
    else if(opcoes.value === "base") {
        p.innerHTML = baseDeco()
        
    }
});


