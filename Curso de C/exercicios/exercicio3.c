#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  int segundos, minutos, horas = 0;

  printf("Qual o tempo cronometrado?\n");
  scanf("%d", &segundos);

  if (segundos >= 60)
  {
    minutos = segundos / 60;
    segundos = segundos % (minutos * 60);
    printf("minutos: %d - segundos: %d\n", minutos, segundos);
  }

  if (minutos >= 60)
  {
    horas = minutos / 60;
    minutos = minutos % (horas * 60);
    printf("%d hora(s) - %d minuto(s) - %d segundo(s)\n", horas, minutos, segundos);
  }
}