function inteiros(){
    let a = Number(prompt("Qual o primeiro valor?")), b = Number(prompt("Qual o segundo valor?"))
    if(a == b){
        c = a + b
    }else{
        c = a * b
    }
    alert(c)
}
inteiros()