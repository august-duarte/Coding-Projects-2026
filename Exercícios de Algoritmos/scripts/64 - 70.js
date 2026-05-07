function exercicio64() {
  for (i = 0; i <= 40; i += 5) {
    modificarConteudo(`${i}`)
  }

  modificarConteudo("Acabou!")
}

function exercicio65() {
  for (i = 100; i >= 0; i -= 10) {
    modificarConteudo(`${i}`)
  }

  modificarConteudo("Acabou!")
}

function exercicio66() {
  let numero

  do {
    numero = +prompt("Digite um número")
  } while (isNaN(numero))

  for (i = 0; i <= 10; i++) {
    modificarConteudo(`
      ${numero} x ${i} = ${numero * i}
    `)
  }
}

function exercicio67() {
  let numero

  do {
    numero = +prompt("Digite um número")
  } while (isNaN(numero) || numero <= 0)

  for (i = 0; i <= numero; i++) {
    modificarConteudo(`${i}`)
  }

  modificarConteudo("FIM!")
}

function exercicio68() {
  let sexo
  let peso

  let qntMulheres = 0
  let qntHomAcima100 = 0
  let pesoMedioMulheres = 0
  let pesoTotalMulheres = 0
  let maiorHomem = 0

  for (i = 1; i <= 8; i++) {
    do {
      sexo = prompt("Homem ou mulher? H ou M?").toLowerCase()
    } while (sexo !== "h" && sexo !== "homem" && sexo !== "m" && sexo !== "mulher")

    do {
      peso = +prompt("Digite o peso em kg")
    } while (isNaN(peso) && peso <= 0)

    if (sexo === "mulher" || sexo === "m") {
      qntMulheres++
      pesoTotalMulheres += peso
    } else {
      if (peso >= 100) {
        qntHomAcima100++
      }

      if (peso > maiorHomem) {
        maiorHomem = peso
      }
    }

  }

  pesoMedioMulheres = pesoTotalMulheres / 8
  modificarConteudo(`
    Quantas mulheres: ${qntMulheres}  <br>
    Quantos homens pesam mais de 100kg: ${qntHomAcima100} <br>
    Média de peso entre mulheres: ${pesoMedioMulheres.toFixed(1)}kg<br>
    Peso de homem mais pesado: ${maiorHomem}kg
  `)
}

function exercicio69() {
  let primeiroTermo
  let razao

  do {
    primeiroTermo = +prompt("Digite o primeiro termo")
  } while (isNaN(primeiroTermo))

  do {
    razao = +prompt("Digite razão")
  } while (isNaN(razao) || razao === 0)

  for (i = 0; i <= 10; i++) {
    modificarConteudo(`${primeiroTermo}`)
    primeiroTermo += razao
  }
}

function exercicio70() {
  let primeiroTermo = 0
  let segundoTermo = 1
  let terceiroTermo

  for (i = 0; i < 10; i++) {
    terceiroTermo = primeiroTermo + segundoTermo
    primeiroTermo = segundoTermo
    segundoTermo = terceiroTermo
    modificarConteudo(`${terceiroTermo}`)
  }
}