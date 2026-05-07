#include <stdio.h>
#include <stdlib.h>

#define texto "Entrada e saída de dados."

int main()
{
  printf("%s\n", texto);

  int idade = 0;
  float altura = 0.0;
  char nome[50] = "";

  printf("Digite a idade:\n");
  scanf("%d", &idade);

  printf("Digite a altura em metros:\n");
  scanf("%f", &altura);

  printf("Digite o nome:\n");
  scanf("%f", &nome);

  printf("\nDados informados: \n Idade: %d\n Altura: %.2f\n Nome: %c", idade, altura, nome);
}