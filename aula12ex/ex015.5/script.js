function calcular(){
    var un1 = document.querySelector("input#txtu1")
    var un2 = document.querySelector("input#txtu2")
    var un3 = document.querySelector("input#txtu3")
    var un4 = document.querySelector("input#txtu4")
    var res = document.querySelector("div#res")
    var resp = document.querySelector("div#resp")
    var med1 = Number(un1.value)
    var med2 = Number(un2.value)
    var med3 = Number(un3.value)
    var med4 = Number(un4.value)
    var medtotal = (med1+med2+med3+med4)/4
    resp.innerHTML = `A sua media total é ${medtotal}`
    if (medtotal < 5){
        res.innerHTML=`Desculpe, você foi reprovado!`
    }else{
        res.innerHTML = `Parabéns, você foi aprovado!`
    } 
    res.style.textAlign = "center"
    resp.style.textAlign = "center"
}