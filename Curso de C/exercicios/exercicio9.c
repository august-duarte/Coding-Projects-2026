#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  int i, j;

  for (i = 1; i <= 10; i++)
  {
    printf("\nTabuada do %d\n", i);
    for (j = 1; j <= 10; j++)
    {
      int resultado = i * j;
      printf("%d X %d = %d\n", i, j, resultado);
    }
  }
}