#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "contatos-suporte.h"

#define MAX 100

struct lista
{
  int qtd;
  struct contato dados[MAX];
};

Lista *cria_lista()
{
  Lista *li = (Lista *)malloc(sizeof(struct lista));
  if (li != NULL)
    li->qtd = 0;
  return li;
}

void libera_lista(Lista *li)
{
  free(li);
}

int tamanho_lista(Lista *li)
{
  if (li == NULL)
    return -1;
  else
    return li->qtd;
}

int cheia_lista(Lista *li)
{
  if (li == NULL)
    return -1;
  return (li->qtd == MAX);
}

int vazia_lista(Lista *li)
{
  if (li == NULL)
    return -1;
  return (li->qtd == 0);
}

void insere_lista(Lista *li, struct contato con)
{
  if (li == NULL)
    return;

  if (li->qtd == MAX)
    return;

  int i = 0;
  while (i < li->qtd && strcmp(li->dados[i].nome, con.nome) < 0)
  {
    i++;
  }

  for (int j = li->qtd - 1; j >= i; j--)
  {
    li->dados[j + 1] = li->dados[j];
  }

  li->dados[i] = con;
  li->qtd++;
}

Lista *busca_lista(Lista *li, char letra)
{
  if (li == NULL)
    return NULL;

  Lista *li_letra = (Lista *)malloc(sizeof(Lista));
  if (li_letra == NULL)
    return NULL;
  li_letra->qtd = 0;

  for (int i = 0, j = 0; i < li->qtd; i++)
  {
    if (li->dados[i].nome[0] == letra)
    {
      li_letra->dados[j] = li->dados[i];
      li_letra->qtd++;
      j++;
    }
  }

  return li_letra;
}

void listar_lista(Lista *li, char *nome_do_arquivo)
{
  FILE *arquivo = fopen(nome_do_arquivo, "w");

  if (arquivo == NULL)
    return;

  for (int i = 0; i < li->qtd; i++)
  {
    fprintf(arquivo, "Nome: %s | Tel: %s | Endereço: %s | CEP: %s \n",
            li->dados[i].nome, li->dados[i].telefone, li->dados[i].endereco, li->dados[i].cep);
  }

  fclose(arquivo);
}