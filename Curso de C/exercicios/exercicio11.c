#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int calculoSalario(int a, int b, float c);
int main()
{
  int horasTrabalhadas, salarioMinimo;
  float salarioRecebido;
  float imposto = 0.03;

  printf("Insira o numero de horas trabalhadas no mes: ");
  scanf("%d", &horasTrabalhadas);

  printf("\nInsira o valor do salario minimo: ");
  scanf("%d", &salarioMinimo);

  salarioRecebido = calculoSalario(salarioMinimo, horasTrabalhadas, imposto);
  printf("\n\nSalario a receber: %.2f", salarioRecebido);
}

int calculoSalario(int a, int b, float c)
{
  float resultado = (a - a * c) * (b / 2);
  return resultado;
}