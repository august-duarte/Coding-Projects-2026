#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  char s[10];
  printf("Digite algo:\n ");
  fgets(s, 10, stdin);
  fflush(stdin);

  puts("Resultado:\n");
  puts(s);
}
