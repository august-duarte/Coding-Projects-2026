#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  int qntdNumeros, i, atualNumero;
  int soma = 0;

  printf("Quantos numeros quer somar?\n");
  scanf("%d", &qntdNumeros);
  fflush(stdin);

  for (i = 0; i < qntdNumeros; i++)
  {
    printf("Digite um numero: \n");
    scanf("%d", &atualNumero);
    fflush(stdin);
    soma += atualNumero;
  };

  printf("%d", soma);
}