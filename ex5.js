function ordenarDecrescente(){
    let a = Number(prompt("Digite o primeiro valor"))
    let b = Number(prompt("Digite o segundo valor"))
    let c = Number(prompt("Digite o terceiro valor"))

    let maior, meio, menor

    if(a >= b && a >= c){
        maior = a
        if(b >= c){
            meio = b
            menor = c
        }else{
            meio = c
            menor = b
        }
    }else if(b >= a && b >= c) {
        maior = b
        if (a >= c){
            meio = a
            menor = c
        }else{
            meio = c
            menor = a
        }
    }else{
        maior = c
        if(a >= b){
            meio = a
            menor = b
        }else{
            meio = b
            menor = a
        }
    }
    alert("Valores em ordem decrescente: " + maior + ", " + meio + ", " + menor)
}
ordenarDecrescente()
