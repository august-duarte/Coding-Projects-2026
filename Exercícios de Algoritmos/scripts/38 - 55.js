function exercicio38() {
  let contador = 6
  let final = ""

  while (contador <= 11) {
    final = final + contador + " "
    contador++
  } modificarConteudo(`${final} Acabou!`)

}

function exercicio39() {
  let contador = 10
  let final = ""

  while (contador >= 3) {
    final = final + contador + " "
    contador--
  } modificarConteudo(`${final} Acabou!`)

}

function exercicio40() {
  let contador = 0
  let final = ""

  while (contador <= 18) {
    final = final + contador + " "
    contador += 3
  } modificarConteudo(`${final} Acabou!`)
}

function exercicio41() {
  let contador = 100
  let final = ""

  while (contador !== 0) {
    final = final + contador + " "
    contador -= 5
  } modificarConteudo(`${final} Acabou!`)
}

function exercicio42() {
  let numero = 0
  let contador = 0
  let final = ""
  while (numero <= 0 || !Number.isInteger(numero)) {
    numero = +prompt("Número positivo e inteiro")
  }

  while (contador <= numero) {
    final = final + contador + " "
    contador++
  } modificarConteudo(`${final} Acabou!`)

}

function exercicio43() {
  let contador = 30
  let final = ""

  while (contador >= 1) {

    if (Number.isInteger(contador / 4)) {
      final = final + `[${contador}] `
    } else {
      final = final + `${contador} `
    }
    contador--

  } modificarConteudo(`${final} Acabou!`)
}

function exercicio44() {
  let final = ""
  let contador = +prompt("Em qual número vai começar?")
  const numeroFinal = +prompt("Em qual número vai acabar?")
  const incremento = +prompt("Qual vai ser o incremento?")

  if (contador <= numeroFinal) {
    while (contador <= numeroFinal) {
      final += `${contador} `
      contador += incremento
    } modificarConteudo(`${final} Acabou!`)
  } else {
    while (contador >= numeroFinal) {
      final += `${contador} `
      contador -= incremento
    } modificarConteudo(`${final} Acabou!`)
  }

}

function exercicio46() {
  let contador = 6
  let somatoria = 0

  while (contador < 100) {
    somatoria += contador
    contador += 2
  } modificarConteudo(`${somatoria}`)
}

function exercicio47() {
  let contador = 500
  let somatoria = 0

  while (contador >= 0) {
    somatoria += contador
    contador -= 50
  } modificarConteudo(`${somatoria}`)
}

function exercicio48() {
  let contador = 1
  let somatorio = 0

  while (contador <= 7) {
    let numero = +prompt(`Digite o n${contador}`)
    somatorio += numero
    contador++
  } modificarConteudo(`${somatorio}`)
}

function exercicio49() {
  let contador = 1
  let qntPar = 0
  let qntImpar = 0

  while (contador <= 6) {
    let numero = +prompt("Diga um número")

    if (Number.isInteger(numero / 2)) {
      qntPar++
    } else {
      qntImpar++
    }

    contador++
  } modificarConteudo(`
      Quantidade de números Pares: ${qntPar} <br>
      Quantidade de números Ímpares: ${qntImpar}
    `)
}

function exercicio50() {
  let contador = 1
  let final = ""
  let numeroAcimaDe5 = 0
  let numeroDiv3 = 0

  while (contador <= 20) {
    let numero = Math.floor(Math.random() * 11)
    final += `${numero} `

    if (numero > 5) {
      numeroAcimaDe5++
    }
    if (Number.isInteger(numero / 3)) {
      numeroDiv3++
    }

    contador++
  } modificarConteudo(`
      ${final}<br>
      ${`Números acima de 5: ${numeroAcimaDe5}`}<br>
      ${`Números divisíveis por 3: ${numeroDiv3}`}
    `)
}

function exercicio51() {
  let contador = 1
  let valorMenor = 0
  let valorMaior = 0

  while (contador <= 8) {

    let valorAtual = +prompt("Diga um valor")

    if (valorAtual > valorMaior) {
      valorMaior = valorAtual
    }
    if (valorMenor === 0) {
      valorMenor = valorAtual
    }
    else if (valorAtual < valorMenor) {
      valorMenor = valorAtual
    }
    contador++

  } modificarConteudo(`
      O maior valor é ${valorMaior}<br>
      O menor valor é ${valorMenor}
    `)
}

function exercicio52() {
  let contador = 1
  let idadeMedia = 0
  let idadeMaior18 = 0
  let idadeMenor5 = 0
  let maiorIdade = 0

  while (contador <= 10) {
    let idadeAtual = +prompt("Digite a idade de alguém")
    idadeMedia = ((idadeMedia + idadeAtual) / contador).toFixed(2)

    if (idadeAtual >= 18) {
      idadeMaior18++
    }

    if (idadeAtual < 5) {
      idadeMenor5++
    }

    if (idadeAtual > maiorIdade) {
      maiorIdade = idadeAtual
    }
    contador++
  }
  modificarConteudo(`
    A média de idade é ${idadeMedia}<br>
    ${idadeMaior18} pessoas tem mais de 18 anos<br>
    ${idadeMenor5} pessoas tem menos de 5 anos<br>
    A pessoa mais velha tem ${maiorIdade} anos
  `)
}

//fodase não vou fazer o 53 e 54


function exercicio55() {
  let limite = 4
  let numero = Math.floor(Math.random() * 10) + 1

  while (limite !== 0) {
    const chute = +prompt("Chute um número inteiro de 1 a 10: ")

    if (chute === numero) {
      modificarConteudo(`O número era ${numero}, você acertou`)
      break
    } else {
      modificarConteudo(`${limite} tentativas restantes`)
    }
    limite--
  }

}