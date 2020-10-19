function contar(){
    var inicio = document.querySelector("input#numin")//colocou o valor
    var passos = document.querySelector("input#numpa")//colocou o numero de passos
    var fim = document.querySelector("input#numfi")// colocou o onde quer que acabe
    var res = document.querySelector("div#res")//resposta final
    var iniv = Number(inicio.value)
    var pasv = Number(passos.value)
    var fimv = Number(fim.value)

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passos.value.lenght == 0){
        window.alert("ERRO! Faltam dados!")
        res.innerHTML = `Impossivél contar!`
    }else{
       res.innerHTML = `Contando:<br>`
       if (pasv <= 0){
           window.alert("Passo Inválido!Considerando Passo 1")
           pasv = 1
       }
       if(iniv < fimv){
            for( let c = iniv ; c <= fimv; c = (c + pasv)){
                res.innerHTML +=`${c} \u{1F449}`
            }
       }else{
           for (let c = iniv; c >= fimv; c -= pasv){
               res.innerHTML += `${c} \u{1F449}`
           }
      
        }
        res.innerHTML += `\u{1F3C1}`
    }
}