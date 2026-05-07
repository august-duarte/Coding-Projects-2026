#include <stdio.h>
#include <stdlib.h>

int main()
{
  int idade = 0;

  printf("Valor inicial da idade: %d. \n", idade);

  printf("Digite uma idade: ");
  scanf(" %d", &idade);

  printf("Idade informada: %d.\n", idade);
}
