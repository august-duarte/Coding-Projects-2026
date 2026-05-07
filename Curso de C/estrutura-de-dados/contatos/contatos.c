#include <stdio.h>
#include <stdlib.h>
#include "contatos-suporte.h"
#include "contatos-suporte.c"

int main(void)
{
  Lista *li = cria_lista();
  struct contato contato1 = {"Augusto Duarte", "Goncalves dias 170", "51997236551", "90130-060"};
  struct contato contato2 = {"Bruno", "Rua B", "8888-2222", "80000-000"};
  struct contato contato3 = {"Ana", "Rua A", "9999-1111", "70000-000"};

  insere_lista(li, contato2);
  insere_lista(li, contato1);
  insere_lista(li, contato3);
  listar_lista(li, "contatos.txt");
}