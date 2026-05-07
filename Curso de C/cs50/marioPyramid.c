#include <stdio.h>

int main()
{
  int height, scanResult;

  printf("The pyramid can't be taller than 8, and shorter than 3\n");

  do
  {
    printf("How tall will the pyramid be? ");
    scanResult = scanf("%d", &height);
    if (scanResult == 0)
    {
      printf("Error: That's not a number!\n");

      while (getchar() != '\n')
        ;
      height = 0;
    }

  } while (height < 3 || height > 8);

  for (int i = 1; i <= height; i++)
  {
    for (int j = 1; j <= height * 2 + 2; j++)
    {
      if (j == height + 1 || j == height + 2)
      {
        printf(" ");
      }
      else if (j > height + i + 2)
      {
        break;
      }
      else if (j > height - i)
      {
        printf("#");
      }
      else
      {
        printf(" ");
      }
    }
    printf("\n");
  }

  return 0;
}