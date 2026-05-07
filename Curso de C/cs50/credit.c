#include <stdio.h>
#include <math.h>

int main()
{
  long long number, numberCopy;
  int digitsNormal = 0;
  int digitsDouble = 0;
  int i = 0;
  int checksum, firstTwoDigits, scanResult;

  printf("Number: ");
  scanf("%lld", &number);

  do
  {

    printf("Number: ");
    scanResult = scanf("%d", &number);
    if (scanResult == 0)
    {
      printf("Error: That's not a number!\n");

      while (getchar() != '\n')
        ;
      number = 0;
    }

  } while (scanResult == 0);
  numberCopy = number;

  while (numberCopy > 0)
  {
    i++;

    if (i % 2 != 0)
    {
      digitsNormal += numberCopy % 10;
    }
    else
    {
      int multip = (numberCopy % 10) * 2;
      if (multip > 9)
      {
        digitsDouble += (multip % 10) + (multip / 10);
      }
      else
      {
        digitsDouble += multip;
      }
    }

    numberCopy /= 10;
  }
  numberCopy = number;
  checksum = digitsDouble + digitsNormal;

  while (numberCopy >= 100)
  {
    numberCopy /= 10;
  }
  firstTwoDigits = (int)numberCopy;

  if (checksum % 10 == 0)
  {
    if (i == 15 && (firstTwoDigits == 34 || firstTwoDigits == 37))
    {
      printf("AMEX");
    }
    else if (i == 16 && firstTwoDigits >= 51 && firstTwoDigits <= 55)
    {
      printf("MASTERCARD");
    }
    else if ((i == 13 || i == 16) && firstTwoDigits / 10 == 4)
    {
      printf("VISA");
    }
    else
    {
      printf("Invalid");
    }
  }
}