function exercicio17() {
  const velocidade = +prompt("Velocidade do carro: ");
  if (velocidade > 80) {
    const multa = (velocidade - 80) * 5;
    modificarConteudo(`Você foi multado em R$ ${multa.toFixed(2)}!`);
  } else {
    modificarConteudo("Velocidade dentro do limite. Você não foi multado.");
  }
}

function exercicio18() {
  const date = new Date();
  const anoDeNascimento = +prompt("Em que ano você nasceu?");
  const idade = date.getFullYear() - anoDeNascimento;

  const mensagem = idade >= 16
    ? `Com ${idade} anos, você já pode votar.`
    : `Com ${idade} anos, você ainda não tem idade para votar.`;

  modificarConteudo(mensagem);
}

function exercicio19() {
  const nota1 = +prompt("Nota 1: ");
  const nota2 = +prompt("Nota 2: ");
  const notaMedia = (nota1 + nota2) / 2;

  if (notaMedia >= 7) {
    modificarConteudo(`Média: ${notaMedia.toFixed(1)} - Resultado: Aprovado!`);
  } else {
    modificarConteudo(`Média: ${notaMedia.toFixed(1)} - Resultado: Reprovado.`);
  }
}

function exercicio20() {
  const numero = +prompt("Digite um número: ");
  if (numero === 0) {
    modificarConteudo("O número é zero.");
  } else {
    const tipo = numero % 2 === 0 ? "par" : "ímpar";
    modificarConteudo(`O número ${numero} é ${tipo}.`);
  }
}

function exercicio21() {
  const anoBi = +prompt("Diga um ano: ");
  // Lógica real de ano bissexto: divisível por 4 E (não divisível por 100 OU divisível por 400)
  const isBissexto = (anoBi % 4 === 0 && anoBi % 100 !== 0) || (anoBi % 400 === 0);

  modificarConteudo(isBissexto ? `O ano ${anoBi} é bissexto.` : `O ano ${anoBi} não é bissexto.`);
}

function exercicio22() {
  const idadeJovem = +prompt("Quantos anos você tem?");
  if (idadeJovem < 18) {
    modificarConteudo(`Faltam ${18 - idadeJovem} ano(s) para o seu alistamento.`);
  } else if (idadeJovem > 18) {
    modificarConteudo(`Já se passaram ${idadeJovem - 18} ano(s) do prazo de alistamento!`);
  } else {
    modificarConteudo("Você completa 18 anos este ano. Deve se alistar!");
  }
}

function exercicio23() {
  const nome = prompt("Qual seu nome?");
  let sexo = "";

  do {
    const entrada = prompt("Sexo [F/M]:");
    if (!entrada) return;
    sexo = entrada.trim().toLowerCase();
  } while (sexo !== "f" && sexo !== "m");

  const valorCompras = +prompt("Qual o valor das compras?");
  const desconto = sexo === "f" ? 0.13 : 0.05;
  const valorFinal = valorCompras * (1 - desconto);

  modificarConteudo(`Cliente: ${nome} | Desconto: ${desconto * 100}% | Total: R$ ${valorFinal.toFixed(2)}`);
}

function exercicio24() {
  const distancia = +prompt("Quantos km deseja viajar?");
  if (distancia <= 0) {
    modificarConteudo("Distância inválida.");
  } else {
    const precoKm = distancia <= 200 ? 0.50 : 0.45;
    const total = distancia * precoKm;
    modificarConteudo(`Viagem de ${distancia}Km: R$ ${total.toFixed(2)} (R$ ${precoKm.toFixed(2)}/Km)`);
  }
}

function exercicio25() {
  const r1 = +prompt("Reta 1:");
  const r2 = +prompt("Reta 2:");
  const r3 = +prompt("Reta 3:");

  // Regra matemática: cada lado deve ser menor que a soma dos outros dois
  const ePossivel = (r1 < r2 + r3) && (r2 < r1 + r3) && (r3 < r1 + r2);

  if (ePossivel) {
    modificarConteudo(`Com as retas ${r1}, ${r2} e ${r3}: É possível formar um Triângulo.`);
  } else {
    modificarConteudo(`Com as retas ${r1}, ${r2} e ${r3}: Não é possível formar um Triângulo.`);
  }
}
//pedi pro gemini trocar algumas coisas simples e ele arrumou tudo que tinha de errado nessa porra