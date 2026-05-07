#include <stdio.h>

int calculoPorcentagens(int a, int b);

int main()
{
  int valorFabrica, porcentLucro, porcentImposto, valorLucro, valorImposto, valorFinal;

  printf("Insira o preco de fabrica: ");
  scanf("%d", &valorFabrica);

  printf("Insira a porcentagem de lucro: ");
  scanf("%d", &porcentLucro);

  printf("Insira a porcentagem de impostos: ");
  scanf("%d", &porcentImposto);

  valorLucro = calculoPorcentagens(valorFabrica, porcentLucro);
  printf("\nLucro do distribuidor: %d\n", valorLucro);

  valorImposto = calculoPorcentagens(valorFabrica, porcentImposto);
  printf("Valor do imposto: %d\n", valorImposto);

  valorFinal = valorFabrica + valorLucro + valorImposto;
  printf("Valor total: %d\n", valorFinal);

  return 0;
}

int calculoPorcentagens(int a, int b)
{
  return (a * b) / 100;
}