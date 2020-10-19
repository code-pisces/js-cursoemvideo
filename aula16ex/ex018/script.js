
let sel = document.querySelector("select#selnum")
let res = document.querySelector("div#res")
let num = document.querySelector("input#txtnum")
let Arr = []

function isnum(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isnum(num.value) && !inlista(num.value, Arr)){
    let item = document.createElement("option")
    item.text = `O valor ${num.value} foi adicionado!`
    Arr.push(Number(num.value))
    sel.appendChild(item)
    res.innerHTML = ""
    }else{
        alert(`Os dados são inválidos ou já estão na lista!`)
    }
    num.value = ""
    num.focus()
}
function finalizar(){
    if(Arr.length == 0){
        alert("Adicione valores antes de finalizar")
    }else{
       /*res.innerHTML = ""
        Arr.sort()
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const valorTotal = (Arr.reduce(reducer));
        const media = (valorTotal / Arr.length)
        res.innerHTML+= 
        `O total de números digitados foi ${Arr.length}.<br>
        O maior valor digitado foi ${Arr[Arr.length -1]}.<br>
        O menor valor digitado foi ${Arr[0]}.<br>
        A soma de todos os valores foi ${valorTotal}.<br>
        A média entre os valores é ${media}.`*/
        //ou
        let tot = Arr.length
        let maior = Arr[0]
        let menor = Arr[0]
        let soma = 0 
        let media = 0
        for(let pos in Arr){
            soma += Arr[pos]
            if(Arr[pos] > maior){
                maior = Arr[pos]
            }if(Arr[pos] < menor){
                menor = Arr[pos]
            }
            media = soma / tot
            res.innerHTML = ""
            res.innerHTML += `O total de números digitados foi ${tot}.<br>
            O maior valor digitado foi ${maior}.<br>
            O menor valor digitado foi ${menor}.<br>
            A soma de todos os valores foi ${soma}.<br>
            A média entre os valores é ${media}.`
        }
    }
   
}