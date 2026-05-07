#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  int notaLaboratorio, notaAvaliacao, notaExame, media;

  printf("Qual a sua nota no trabalho de laboratorio?\n");
  scanf("%d", &notaLaboratorio);

  printf("Qual a sua nota na avaliacao semestral?\n");
  scanf("%d", &notaAvaliacao);

  printf("Qual a sua nota no exame final?\n");
  scanf("%d", &notaExame);

  media = (notaLaboratorio * 2 + notaAvaliacao * 3 + notaExame * 5) / 3;

  if (media >= 8)
  {
    printf("Você passou com um A!");
  }
  else if (media < 8 && media >= 7)
  {
    printf("Você passou com um B!");
  }
  else if (media < 7 && media >= 6)
  {
    printf("Você passou com um C!");
  }
  else if (media < 6 && media >= 5)
  {
    printf("Você passou com um D!");
  }
  else
  {
    printf("Você não passou com um E!");
  }
}