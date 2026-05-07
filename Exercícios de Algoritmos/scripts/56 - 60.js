function exercicio56() {
  let flag = true

  while (flag) {
    let numero = +prompt("Digite a senha\n (1111)")

    if (numero === 1111) {
      flag = false
    }
  }
}

function exercicio57() {
  let continuar = true
  let totalHomem = 0
  let totalMulher = 0

  seiLaPorra()
  modificarConteudo(`
    <button id="btn-continuar">Continuar</button>
    <div id="resultado-financeiro">
      Total pago aos homens: R$ 0.00 <br>
      Total pago às mulheres: R$ 0.00
    </div>
  `)

  function seiLaPorra() {
    while (continuar) {
      const sexo = prompt("Homem ou mulher?").toLowerCase()
      const salario = +prompt("Qual seu salário?")

      if (sexo === "homem") {
        totalHomem += salario
      } else if (sexo === "mulher") {
        totalMulher += salario
      } else {
        modificarConteudo("Sexo inválido, reinicie")
      }

      continuar = false
    }
    const divResultado = document.getElementById("resultado-financeiro");
    divResultado.innerHTML = `
      <strong>Total pago aos homens:</strong> R$ ${totalHomem.toFixed(2)} <br>
      <strong>Total pago às mulheres:</strong> R$ ${totalMulher.toFixed(2)}
    `;
  }
  document.getElementById("btn-iniciar").addEventListener("click", processarDados);
}

function exercicio58() {
  let somaIdade = 0
  let mediaIdade = 0
  let continuar = true
  let contador = 0

  while (continuar) {
    const idade = +prompt(`Qual sua idade?<br>(999 acaba o loop)`)

    if (idade === 999) {
      mediaIdade = somaIdade / contador
      continuar = false
      modificarConteudo(`A turma tem ${contador} alunos, e a média de idade é de ${mediaIdade}`)
    } else if (idade == "") {
      continuar = false
    } else {
      somaIdade += idade
    }

    contador++
  }
}

function exercicio59() {
  let maiorIdade = 0;
  let qntHomens = 0;
  let mulherJovem = Infinity;
  let homensTotal = 0;
  let flag = true;

  while (flag) {
    const promptSexo = prompt("Qual seu sexo? [H/M]").toLowerCase();
    const promptIdade = +prompt("Qual sua idade?");

    if (promptIdade > maiorIdade) {
      maiorIdade = promptIdade;
    }

    if (promptSexo === "h" || promptSexo === "homem") {
      qntHomens++;
      homensTotal += promptIdade;
    }
    else if (promptSexo === "m" || promptSexo === "mulher") {
      if (promptIdade < mulherJovem) {
        mulherJovem = promptIdade;
      }
    }

    const continuar = prompt("Você quer continuar? [S/N]").toLowerCase();
    if (continuar === "n") {
      flag = false;
    }
  }

  const homensMedia = qntHomens > 0 ? (homensTotal / qntHomens).toFixed(1) : 0;
  const idadeMulherResult = (mulherJovem === Infinity) ? "Nenhuma mulher" : mulherJovem;

  modificarConteudo(`
    A maior idade lida foi: ${maiorIdade} <br>
    Homens cadastrados: ${qntHomens} <br>
    Idade da mulher mais jovem: ${idadeMulherResult} <br>
    Média de idade entre os homens: ${homensMedia}
  `);
}

function exercicio60() {
  let idadeMaisVelha = 0
  let idadeMaisNova = Infinity
  let nomeMaisVelho = ""
  let nomeMulherJovem = ""
  let mediaIdade = 0
  let idadeTotal = 0
  let qntHomensAcima30 = 0
  let qntMulherAbaixo18 = 0
  let flag = true
  let contador = 1

  while (flag) {
    const nome = prompt("Diga um nome: ")
    const idade = +prompt("Diga uma idade: ")
    const sexo = prompt("Homem ou Mulher? (H ou M)")
    idadeTotal += idade

    if (idade > idadeMaisVelha) {
      idadeMaisVelha = idade
      nomeMaisVelho = nome
    }

    if (sexo === "m" || sexo === "mulher") {
      if (idade < idadeMaisNova) {
        idadeMaisNova = idade
        nomeMulherJovem = nome
      }

      if (idade < 18) {
        qntMulherAbaixo18++
      }
    }
    else if (sexo === "h" || sexo === "homem") {
      if (idade > 30) {
        qntHomensAcima30++
      }
    }

    contador++

    const continuar = prompt("Você quer continuar? [S/N]").toLowerCase();
    if (continuar === "n") {
      flag = false;
    }
  }
  mediaIdade = idadeTotal / contador
  modificarConteudo(`
    Pessoa mais velha: ${nomeMaisVelho}<br>
    Mulher mais jovem: ${nomeMulherJovem}<br> 
    Média de idade: ${mediaIdade}<br>
    Quantidade de homens acima de 30 anos: ${qntHomensAcima30}<br>
    Quantidade de mulheres abaixo de 18 anos: ${qntMulherAbaixo18}
  `)

}