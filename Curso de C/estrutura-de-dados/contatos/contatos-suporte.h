struct contato
{
  char nome[50];
  char endereco[100];
  char telefone[20];
  char cep[15];
};
typedef struct lista Lista;

Lista *cria_lista();

void libera_lista(Lista *li);

int tamanho_lista(Lista *li);

int cheia_lista(Lista *li);

int vazia_lista(Lista *li);

void insere_lista(Lista *li, struct contato con);

Lista *busca_lista(Lista *li, char letra);

void listar_lista(Lista *li, char *nome_do_arquivo);