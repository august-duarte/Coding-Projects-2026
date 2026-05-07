function exercicio26() {
  let num1, num2

  do {
    num1 = +prompt("Num 1:");
    num2 = +prompt("Num 2:");
  } while (typeof num1 !== "number" && typeof num2 !== "number")


  if (num1 > num2) {
    modificarConteudo(`O número 1 ${num1} é maior que o 2${num2}`)
  } else if (num1 < num2) {
    modificarConteudo(`O número 2 ${num2} é maior que o 1${num1}`)
  } else {
    modificarConteudo(`Os números são iguais`)
  }
}

function exercicio27() {
  const nota1 = +prompt("Nota 1:");
  const nota2 = +prompt("Nota 2:");
  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
    modificarConteudo("Aprovado");
  } else if (media < 7) {
    modificarConteudo("Recuperação");
  } else {
    modificarConteudo("Reprovado");
  }
}

function exercicio28() {
  const largura = +prompt("Largura em m^2: ")
  const comprimento = +prompt("Comprimento em m^2:")
  const area = largura * comprimento

  if (area > 500) {
    modificarConteudo("Terreno VIP");
  } else if (area <= 500 && area > 100) {
    modificarConteudo("Terreno Master");
  } else {
    modificarConteudo("Terreno Popular");
  }
}

function exercicio29() {
  const nome29 = prompt("Nome:")
  let salario29 = +prompt("Salário:")
  const anos29 = +prompt("Anos:")

  if (anos29 <= 3) {
    atualizarSalarioEMensagem(0.03)
  } else if (anos29 > 3 && anos29 < 10) {
    atualizarSalarioEMensagem(0.125)
  } else {
    atualizarSalarioEMensagem(0.2)
  }

  function atualizarSalarioEMensagem(aumento) {
    salario29 = salario29 + (salario29 * aumento)
    modificarConteudo(`O salário do funcionário ${nome29}, após trabalhar por ${anos29} anos na empresa, é de R$${salario29.toFixed(2)}`)
  }
}

function exercicio30() {
  const reta1 = +prompt("Reta 1:")
  const reta2 = +prompt("Reta 2:")
  const reta3 = +prompt("Reta 3:")

  let ePossivel = true;

  const retas = [reta1, reta2, reta3]
  const tamanho = retas.length
  let retasIguais = 1

  for (i = 0; i < tamanho; i++) {
    const retaAtual = retas[i];
    const totalRetas = retas[0] + retas[1] + retas[2];
    const diferençaRetas = totalRetas - retaAtual

    if (retaAtual == retas[i + 1]) {
      retasIguais++
    } else if (retaAtual == retas[i + 2]) {
      retasIguais++
    }

    if (retaAtual >= diferençaRetas) {
      ePossivel = false
      break
    }
  }

  if (ePossivel && retasIguais == 3) {
    modificarConteudo(`Sim! É um triângulo equilátero`)
  } else if (ePossivel && retasIguais == 2) {
    modificarConteudo(`Sim! É um triângulo isósceles`)
  } else if (ePossivel && retasIguais == 1) {
    modificarConteudo("Sim! É um triângulo escaleno")
  } else {
    modificarConteudo("Não! Não é um triângulo")
  }



}

function exercicio31() {
  const regras = {
    pedra: 'tesoura',
    tesoura: 'papel',
    papel: 'pedra'
  };

  const jogadaUsuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

  const opcoes = Object.keys(regras);
  const jogadaPC = opcoes[Math.floor(Math.random() * opcoes.length)];

  modificarConteudo(`Você escolheu: ${jogadaUsuario}`);
  modificarConteudo(`O computador escolheu: ${jogadaPC}`);

  if (jogadaUsuario === jogadaPC) {
    modificarConteudo("Empate")
  } else if (regras[jogadaUsuario] === jogadaPC) {
    modificarConteudo("Você venceu")
  } else {
    modificarConteudo("Você perdeu")
  }

}


function exercicio32() {
  let numero32 = 0
  do {
    numero32 = Math.floor(Math.random() * 6)
  } while (numero32 <= 1)

  const chute = +prompt("Chute um número inteiro de 1 a 5: ")

  if (chute === numero32) {
    modificarConteudo(`O número era ${numero32}, você acertou`)
  } else {
    modificarConteudo(`O número era ${numero32}, você errou`)
  }
}

function exercicio33() {
  const casaValor = +prompt("Valor da casa:")
  const salario33 = +prompt("Salário:")
  const casaPagamentoAnos = +prompt("Quantos anos pra pagar:")

  const valorMensal = casaValor / casaPagamentoAnos * 12

  if (valorMensal >= salario33 * 0.3) {
    modificarConteudo(`Como o valor do pagamento mensal de ${valorMensal} é maior que 30% do seu salário de ${salario33}, seu empréstimo foi NEGADO`)
  } else {
    modificarConteudo(`Como o valor de ${valorMensal} é menor que 30% do seu salário de ${salario33}, seu empréstimo foi APROVADO`)
  }
}

function exercicio34() {
  const altura34 = +prompt("Sua altura em metros:")
  const peso34 = +prompt("Seu peso em kgs:")

  const imc = peso34 / (altura34 ** 2)

  const tabelaIMC = [
    { limite: 18.5, label: "Abaixo do peso" },
    { limite: 25, label: "Peso ideal" },
    { limite: 30, label: "Sobrepeso" },
    { limite: 40, label: "Obesidade" },
    { limite: Infinity, label: "Obesidade mórbida" }
  ];

  const faixa = tabelaIMC.find(item => imc < item.limite);

  const resultado = faixa ? faixa.label : "Valor inválido";

  modificarConteudo(`IMC: ${imc} - Classificação: ${resultado}`);

}

function exercicio35() {
  const carroTipo35 = prompt("Popular ou Luxo?").toLowerCase()
  const distancia35 = +prompt("Distância percorrida em km?")
  const diasAluguel35 = +prompt("Quantos dias alugados?")

  const tabelaCarros35 = [
    {
      distanciaMinima: 100,
      tipo: "popular",
      valorDiario: 90,
      valorDistanciaAbaixo: 0.2,
      valorDistanciaAcima: 0.1
    },
    {
      distanciaMinima: 200,
      tipo: "luxo",
      valorDiario: 150,
      valorDistanciaAbaixo: 0.3,
      valorDistanciaAcima: 0.25
    }
  ]

  const infoCarros = tabelaCarros35.find(item => item.tipo === carroTipo35);

  if (infoCarros) {
    const valorPorKm = distancia35 <= infoCarros.distanciaMinima
      ? infoCarros.valorDistanciaAbaixo
      : infoCarros.valorDistanciaAcima

    const valorDistanciaFinal = valorPorKm * distancia35
    const valorDiarioFinal = infoCarros.valorDiario * diasAluguel35

    modificarConteudo(`Valor total é de: ${valorDiarioFinal + valorDistanciaFinal}`)
  } else {
    modificarConteudo("Tipo de carro inválido")
  }

}

function exercicio36() {
  let horasTreinadas;
  const valorHoras = 0.05

  do {
    horasTreinadas = +prompt("Quantas horas treinou no mês?")
  } while (typeof horasTreinadas !== "number")

  const tabelaPontuacao = [
    { horasLimite: 10, pontos: 2 },
    { horasLimite: 20, pontos: 5 },
    { horasLimite: Infinity, pontos: 10 }
  ]

  const faixa = tabelaPontuacao.find(item => horasTreinadas <= item.horasLimite)
  const pontuacaoTotal = horasTreinadas * faixa.pontos

  modificarConteudo(`Você fez uma pontuação de ${pontuacaoTotal}, e ganhou R$${(pontuacaoTotal * valorHoras).toFixed(2)}`)
}

function exercicio37() {
  const salarioAtual = +prompt("Qual seu salário atual?")
  const sexo = prompt("Homem ou mulher?").toLowerCase()
  const anosNaEmpresa = +prompt("Quantos anos está na empresa?")

  const tabelas = {
    mulher: [
      { anosLimite: 15, taxa: 0.05 },
      { anosLimite: 20, taxa: 0.12 },
      { anosLimite: Infinity, taxa: 0.23 }
    ],
    homem: [
      { anosLimite: 20, taxa: 0.03 },
      { anosLimite: 30, taxa: 0.13 },
      { anosLimite: Infinity, taxa: 0.25 }
    ]
  };

  const faixasDoGenero = tabelas[sexo]

  if (faixasDoGenero) {
    const faixaSalarial = faixasDoGenero.find(f => f.anosLimite > anosNaEmpresa)
    const salarioAtualizado = salarioAtual * (1 + faixaSalarial.taxa)

    modificarConteudo(`O seu salário atualizado é de R$${salarioAtualizado.toFixed(2)}`)
  } else {
    modificarConteudo("Erro: Gênero não reconhecido. Use 'homem' ou 'mulher'.");
  }

}