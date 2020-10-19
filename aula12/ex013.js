var agora = new Date()
var diasem = agora.getDay()
/*
DOMINGO = 0
SEGUNDA = 1
TERÇA = 2
QUARTA = 3 
QUINTA = 4
SEXTA = 5 
SÁBADO = 6
*/
console.log(diasem)
switch(diasem){
    case 0 :
        console.log("Domingo")
        break
    case 1 : 
        console.log("Segunda")
        break
    case 2 :
        console.log("Terça")
        break
    case 3 :
        console.log("Quarta")
        break
    case 4 : 
        console.log("Quinta")
        break
    case 5 :
        console.log("Sexta")
        break
    case 6 : 
        console.log("Sábado")
        break
    default:
        console.log("ERRO!Dia inválido!")
}