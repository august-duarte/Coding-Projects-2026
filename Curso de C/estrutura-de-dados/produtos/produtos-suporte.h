struct produto
{
  char nome[30];
  float valor;
};

typedef struct lista Lista;

Lista *cria_lista();

void insere_lista(Lista *li, struct produto produto);

void listar_lista(Lista *li, char *nome_do_arquivo);