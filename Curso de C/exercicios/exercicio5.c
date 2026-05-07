#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  int n1, n2, escolha, resultado;

  printf("Digite 1 para somar:\n");
  printf("Digite 2 para subtrair:\n");
  printf("Digite 3 para multiplicar:\n");
  printf("Digite 4 para dividir:\n");
  do
  {
    scanf("%d", &escolha);

    if (escolha > 4 || escolha < 1)
    {
      printf("Tente denovo. Digite um numero de 1 a 4.\n");
    }

  } while (escolha > 4 || escolha < 1);

  printf("Digite o n1:\n");
  scanf("%d", &n1);

  printf("Digite o n2:\n");
  scanf("%d", &n2);

  switch (escolha)
  {
  case 1:
    resultado = n1 + n2;
    printf("Resultado: %d\n", resultado);
    break;

  case 2:
    resultado = n1 - n2;
    printf("Resultado: %d\n", resultado);
    break;

  case 3:
    resultado = n1 * n2;
    printf("Resultado: %d\n", resultado);
    break;

  case 4:
    resultado = n1 / n2;
    printf("Resultado: %d\n", resultado);
    break;
  }
}