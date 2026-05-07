#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "produtos-suporte.h"

#define MAX 20

struct lista
{
  int qtd;
  struct produto dados[MAX];
};

Lista *cria_lista()
{
  Lista *li = (Lista *)malloc(sizeof(Lista));
  if (li != NULL)
    li->qtd = 0;
  return li;
}

void insere_lista(Lista *li, struct produto produto)
{
  if (li == NULL)
    return;

  if (li->qtd == MAX)
    return;

  if (produto.valor < 100)
    produto.valor += 10;

  int i = 0;
  while (i < li->qtd && strcmp(li->dados[i].nome, produto.nome) < 0)
  {
    i++;
  }

  for (int j = li->qtd - 1; j >= i; j--)
  {
    li->dados[j + 1] = li->dados[j];
  }

  li->dados[i] = produto;
  li->qtd++;
}

void listar_lista(Lista *li, char *nome_do_arquivo)
{

  FILE *arquivo = fopen(nome_do_arquivo, "w");

  if (arquivo == NULL)
    return;

  for (int i = 0; i < li->qtd; i++)
  {
    fprintf(arquivo, "Nome: %s | Valor: %2.f \n", li->dados[i].nome, li->dados[i].valor);
  }

  fclose(arquivo);
}