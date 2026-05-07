#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  int soma = 0;
  int i;

  for (i = 1; i <= 10; i++)
  {
    soma += i;
    printf("Soma atual: %d\n", soma);
  }

  printf("\nSoma final: %d\n", soma);
}