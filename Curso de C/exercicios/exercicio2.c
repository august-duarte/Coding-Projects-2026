#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  int salarioAtual, salarioNovo, aumento;

  printf("Qual o seu salario?\n");
  scanf("%d", &salarioAtual);

  printf("\nQual o percentual do aumento? Ex.: 1.5\n");
  scanf("%d", &aumento);

  salarioNovo = salarioAtual + salarioAtual * aumento / 100;

  printf("\nSalario antigo: %d\n", salarioAtual);
  printf("\nSalario novo: %d\n", salarioNovo);
}