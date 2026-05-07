function exercicio61() {
  let contador = -3

  do {
    contador += 3
    modificarConteudo(`${contador}`)
  } while (contador < 30)
}

function exercicio62() {
  let qntIdades = 0
  let mediaIdades = 0
  let totalIdades = 0
  let anos21OuMais = 0
  let flag = true
  let continuar

  do {
    const idade = +prompt("Digite uma idade")
    if (idade >= 21) {
      anos21OuMais++
    }

    totalIdades += idade
    qntIdades++
    do {
      continuar = prompt("Continuar? S ou N?").toLowerCase()
    } while (continuar !== "n" && continuar !== "s")

    if (continuar === "n") {
      flag = false
    }
  } while (flag)

  mediaIdades = totalIdades / qntIdades
  modificarConteudo(`
      Idades digitas: ${qntIdades}<br>
      Média das idades: ${mediaIdades.toFixed(1)}<br>
      Quantos 21 anos ou mais: ${anos21OuMais}
      `)
}

function exercicio63() {
  let continuar
  let numero

  let flag = true
  let somaValor = 0
  let menorValor = Infinity
  let mediaValor = 0
  let parValor = 0
  let qntValor = 0

  do {
    do {
      numero = +prompt("Digite um número:")
    } while (typeof numero !== "number")

    if (numero < menorValor) {
      menorValor = numero
    }

    if (Number.isInteger(numero / 2)) {
      parValor++
    }
    somaValor += numero
    qntValor++

    do {
      continuar = prompt("Continuar? S ou N").toLowerCase()
    } while (continuar !== "s" && continuar !== "n")

    if (continuar === "n") {
      flag = false
    }
  } while (flag)

  mediaValor = somaValor / qntValor
  modificarConteudo(`
    Somatório: ${somaValor}  <br>
    Menor valor: ${menorValor}<br>
    Média dos valores: ${mediaValor}<br>
    Quantidade par: ${parValor}
  `)

}
