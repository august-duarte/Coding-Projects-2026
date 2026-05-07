function exercicio71() {
  let vetor = []

  for (i = 0; i < 8; i++) {
    vetor[i] = 999
  }

  modificarConteudo(`${vetor.join(" ")}`)
}

function exercicio72() {
  let vetor = []
  let contagem = 0

  for (i = 0; i < 10; i++) {
    contagem += 5
    vetor[i] = contagem
  }

  modificarConteudo(`${vetor.join(" ")}`)
}

function exercicio73() {
  let vetor = []
  let contagem = 10

  for (i = 0; i < 10; i++) {
    contagem--
    vetor[i] = contagem
  }

  modificarConteudo(`${vetor.join(" ")}`)
}

function exercicio74() {
  let vetor = []

  for (i = 0; i < 10; i++) {
    if ((i / 2) % 1 === 0) {
      vetor[i] = 5
    } else {
      vetor[i] = 3
    }
  }

  modificarConteudo(`${vetor.join(" ")}`)
}

function exercicio75() {
  let vetor = [1, 1]

  for (i = 2; i < 16; i++) {
    vetor[i] = vetor[i - 1] + vetor[i - 2]
  }

  modificarConteudo(`${vetor.join(" ")}`)
}

function exercicio76() {
  let vetor = []

  for (i = 0; i < 7; i++) {
    vetor[i] = Math.random().toFixed(2)
  }

  modificarConteudo(`${vetor.join(" - ")}`)
}

function exercicio77() {
  let vetor = []

  for (i = 7; i > 0; i--) {
    vetor[i] = prompt("Digite um nome")
  }

  modificarConteudo(`${vetor.join(" - ")}`)
}

function exercicio78() {
  let vetor = []
  let final = ""

  for (i = 0; i < 15; i++) {
    do {
      vetor[i] = +prompt("Digite um número")
    } while (isNaN(vetor[i]))

    if ((vetor[i] / 10) % 1 === 0) {
      final += `- ${i} -`
    }
  }

  modificarConteudo(`
    ${vetor.join(" - ")}<br>
    ${final}
  `)
}

function exercicio79() {
  let vetor = []
  let final = ""

  for (i = 0; i < 10; i++) {
    do {
      vetor[i] = +prompt("Digite um número")
    } while (isNaN(vetor[i]))

    if (vetor[i] / 2 % 1 === 0) {
      final += `Pos: ${i};<br>Valor: ${vetor[i]}<br>---<br>`
    }
  }

  modificarConteudo(`${vetor.join(" - ")}<br>${final}`)
}

function exercicio80() {
  let vetor = []
  let numeroEscolhido
  let contador = 0
  let posicoes = []

  for (i = 0; i < 30; i++) {
    vetor[i] = Math.floor(Math.random() * 15) + 1
  }
  do {
    numeroEscolhido = +prompt("Digite um número")
  } while (isNaN(numeroEscolhido) && numeroEscolhido <= 0 && numeroEscolhido > 15)

  for (i = 0; i < 30; i++) {
    if (numeroEscolhido === vetor[i]) {
      contador++
      posicoes.push(i)
    }
  } if (contador === 0) {
    modificarConteudo(`
    ${vetor.join(", ")}<br>
    O valor ${numeroEscolhido} não apareceu nenhuma vez
  `)

  } else {
    modificarConteudo(`
    ${vetor.join(", ")}<br>
    O valor ${numeroEscolhido} apareceu nas posições ${posicoes.join(" - ")}, e apareceu ${contador} vezes
  `)

  }

}