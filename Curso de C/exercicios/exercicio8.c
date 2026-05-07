#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  int termo1 = 0;
  int termo2 = 1;
  int termo3, i;

  printf("%d\n", termo1);
  printf("%d\n", termo2);
  for (i = 2; i < 8; i++)
  {
    termo3 = termo1 + termo2;
    termo1 = termo2;
    termo2 = termo3;
    printf("%d\n", termo3);
  }
}