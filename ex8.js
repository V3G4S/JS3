function boletim(){
    let nomeAluno = Number(prompt("Digite o nome do aluno:"))

    let nota1 = Number(prompt("Digite a primeira nota:"))
    let nota2 = Number(prompt("Digite a segunda nota:"))
    let nota3 = Number(prompt("Digite a terceira nota:"))
    let nota4 = Number(prompt("Digite a quarta nota:"))

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    let situacao
    if(media >= 7){
        situacao = "Aprovado"
    }else{
        situacao = "Reprovado"
    }

    console.log(`Aluno: ${nomeAluno}`)
    console.log(`Média: ${media.toFixed(2)}`)
    console.log(`Situação: ${situacao}`)
}
boletim()
