#include<stdio.h>
int main(){
    int a=69;
    int* x=&a;
    *x=698;
    printf("%p \n",x);
    printf("%p \n",&x);
    printf("%d \n",*x);
    printf("%p \n",*x);
}