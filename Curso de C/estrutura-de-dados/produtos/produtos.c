#include <stdio.h>
#include <stdlib.h>
#include "produtos-suporte.c"

int main(void)
{
  Lista *li = cria_lista();
  struct produto p1 = {"Mouse Gamer", 85.50};
  struct produto p2 = {"Teclado Mecanico", 210.00};
  struct produto p3 = {"Monitor 24\"", 899.90};
  struct produto p4 = {"Cabo HDMI", 25.00};
  struct produto p5 = {"WebCam HD", 120.00};
  struct produto p6 = {"Pen Drive 64GB", 45.00};

  insere_lista(li, p1);
  insere_lista(li, p2);
  insere_lista(li, p3);
  insere_lista(li, p4);
  insere_lista(li, p5);
  insere_lista(li, p6);

  listar_lista(li, "produtos.txt");
}