function exibir(){
    let num = document.querySelector("input#num")
    let tab = document.querySelector("select#seltab")
    if (num.value.length == 0) {
        window.alert("Por favor, insira um número!")
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while (c  <= 10){
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            c++
            tab.appendChild(item)
        }

    }
    
}