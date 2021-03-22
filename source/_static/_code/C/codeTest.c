#include <stdio.h>

int main(char *destination, char *original) {
   
   int count = 0;
   while (*original != '\0'){

      *destination++ = *original++;

      count++;

   }

   *destination = *original;
   return count

  

   
}