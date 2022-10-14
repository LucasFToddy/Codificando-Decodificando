function Enviar() {

    var frase = document.getElementById("frase");
    const stringAlfa = new String("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

    var altFrase = "";

    var criptoFrase = frase.value;


    for(var i = 0; i < criptoFrase.length; i++){
        
        for(var c = 0; c < stringAlfa.length; c++){
            
            if(criptoFrase[i] == " ")
            {
                altFrase += " ";
                break;
            }
            else if(criptoFrase[i] === stringAlfa[c]){
                
                if(stringAlfa[c].charCodeAt() <= '96'){
                    altFrase += stringAlfa[(c + 7)%26].toUpperCase();
                }else{
                    altFrase += stringAlfa[(c + 7)%26];
                }
            }

        }
    }

    console.log(altFrase);

}