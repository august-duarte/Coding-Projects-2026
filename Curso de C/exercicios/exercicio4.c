#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  float numero1, numero2;

  printf("Digite o numero 1: \n");
  scanf("%f", &numero1);

  printf("Digite o numero 2: \n");
  scanf("%f", &numero2);

  if (numero1 > numero2)
  {
    printf("O numero 1 e maior");
  }
  else if (numero1 < numero2)
  {
    printf("O numero 2 e maior");
  }
  else
  {
    printf("Os numeros sao iguais");
  }
}