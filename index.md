# O Basico Sobre Linguagem C

Irei nesse repositorio do github fazer um pequeno curso ensinando a base de programação em linguagem C para Universitarios.

C é uma linguagem de programação de baixo nivel, algo que tem suas vantagens (velocidade/eficiencia) e desvantagens(dificuldade de aprendizado).

## Codigo Base do C

Todo codigo C necessariamente tem essas linhas de codigo.

```c
#include <stdio.h>
int main () {
  // aqui deve estar o seu codigo.
  return 0;
}
```

<ul>
  <li>Na primeira linha incluimos um "biblioteca" de codigo C chamada stdio (Standard Input Output, tradizindo seria Entrada e Saida Padrão), no momento iremos ignora-la. </li>
  <li>Na segunda linha estamos inicializando uma função main (Principal), por definição todo programa C ira ser inicializado pela função main. Entre os simbolos {} teremos todo o codigo que sera executado.</li>
  <li>Na terceira linha temos um comentário de uma linha, os comentários serão ignorados pelo compilador do C ao executar o programa, isso é bom para fazer pequenas anotações no codigo.</li>
  <li>No final da função main devemos sempre fazer o comando return 0;</li>
</ul>

## Função printf

Ao incluir stdio no seu programa, adiquirimos algumas funções, uma delas é a printf, que serve para mostrar algum texto no terminal.

```c
#include <stdio.h>

int main () {
  printf("Olá Mundo!");
  return 0;
}
```
Todo texto deve ser escrito entre "". Experimente trocar o texto e executar o codigo novamente.

## Variaveis e Tipos de Dados
Variavel é um local na memoria do computador onde guardamos dados necessarios para a execução do programa.

Em C uma variavel pode armazenar varios tipos de dados. Os 3 tipos de dados basicos principais: 

<ul>
  <li>char (um único caractere)</li>
  <li>int (numeros inteiros)</li>
  <li>float (numeros reais, com casas decimais).</li>
</ul>

Para criar/declarar uma variavel em C usamos a estrutura: 

```tipo nomeVariavel;```

<strong>Exemplo:</strong>
```c
char letra;
int numero;
float pi;
```

Podemos atribuir um valor à variaveis ja definidas usando o:

```nomeVariavel = valor;```

<strong>Exemplo:</strong>
```c
char letra;
int numero;
float pi;

letra = 'M';
numero = 10;
pi = 3.14;
```

Observações: 
<ul>
  <li>Diferentemente de um texto, um unico caractere deve ser colocado entre ''.</li>
  <li>Note também que em vez de virgula deve-se usar "." para separar as casas decimais de um numero.</li>
</ul>

Algumas outras variações de definições de variaveis:
```c
int numero1, numero2, numero3;
float pi = 3.14;
```
<ul>
  <li>Na primeira linha definimos 3 variaveis do tipo inteira em uma unica linha.</li>
  
  <li>Na segunda linha definimos a variavel pi e ao mesmo tempo atribuimos um valor à mesma.</li>
</ul>

## Variaveis + Printf
Vamos conectar os conhecimentos e usar o printf para mostrar valores de variaveis.
```c
#include <stdio.h>

int main () {
  // Definindo variaveis necessárias
  char letra = 'M';
  int numero  = 10;
  float pi = 3.14;

  //Mostrando seus respectivos valores.
  printf("O valor atribuido à variavel 'letra' é %c\n", letra);
  printf("O valor atribuido à variavel 'numero' é %d\n", numero);
  printf("O valor atribuido à variavel 'pi' é %f\n", pi);

  return 0;
}
```

<ul>
  <li>Utilizamos a marcação <strong>%c</strong> quando queremos substituir essa parte do texto por um valor do tipo char (a variavel letra).</li>
  
  <li>Utilizamos a marcação <strong>%d</strong> quando queremos substituir essa parte do texto por um valor do tipo int (a variavel numero).</li>
  
  <li>Utilizamos a marcação <strong>%f</strong> quando queremos substituir essa parte do texto por um valor do tipo float (a variavel pi).</li>
</ul>

<strong>Observação:</strong> no final de todos os textos tem um "\n", esse é um caractere especial que significa uma quebra de linha. Experimente retirar essas quebras de linhas (\n) e executar o codigo, tente também adicionar deles e veja o resultado.

## Operações Matemáticas.

Temos os operadores:
<ul>
<li>Soma(+)</li>
<li>Subtração(-)</li>
<li>Multiplicação(*)</li>
<li>Divisão (/)</li>
<li>Resto da divisão (%)</li>
</ul>

<strong>Exemplo:</strong>
```c
#include <stdio.h>

int main () {
  // Declarando variaves e atribuindo valores
  int num1 = 5;
  int num2 = 2;
  
  //Efetuando as operações
  int soma = num1 + num2;
  int sub  = num1 - num2;
  int mul  = num1 * num2;
  int div = num1 / num2; 
  int resto = num1 % num2;

  //Mostrando os resultados no terminal
  printf("%d + %d = %d \n", num1, num2, soma);
  printf("%d - %d = %d \n", num1, num2, sub);
  printf("%d * %d = %d \n", num1, num2, mul);
  printf("%d / %d = %d \n", num1, num2, div);
  printf("%d %% %d = %d \n", num1, num2, resto);
  return 0;
}
```
Ao executar receberemos esse resultado:
```
5 + 2 = 7 
5 - 2 = 3 
5 * 2 = 10 
5 / 2 = 2 
5 % 2 = 1
```
<strong>Observações:</strong>

<ul>
  <li>Note que a divisão de 5 / 2 teve como resutado 2 ao inves de 2.5. Em C a divisão de dois numeros inteiros deve ser inteiro. Será explicado como fazer a divisão da forma correta futuramente.</li>

  <li>Uma novidade que não foi dita antes é que podemos utilizar varias marcações em um mesmo printf para mostrar varios dados</li>
  
  <li>Note que o operador % é usado para os marcadores então na terceira linha usamos %% para dizer que queremos utilizar ele como caractere e não a sua funcionalidade da linguagem C.</li>
</ul>

## Operadores + Atribuição

Podemos operar com um valor de uma variavel e automaticamente ja atribuilo à mesma, utilizando dos seguintes operadores.

<ul>
  <li>Soma (+=)</li>
  <li>Subtração (-=)</li>
  <li>Multiplicação (*=)</li>
  <li>Divisão (/=)</li>
  <li>Resto da Divisão (%=)</li>
</ul>

<strong>Exemplo:</strong>
```c
#include <stdio.h>

int main () {
  int n = 10;
  n += 5;      // n = n + 5;
  n -= 3;      // n = n - 3;
  n *= 2;      // n = n * 2;
  n /= 2;      // n = n / 2;
  n %= 2;      // n = n % 2;
  return 0;
}
```
Vamos analizar o codigo em cada linha.
<ul>
  <li>Na <strong>quarta</strong> linha atribuimos 10 à variavel n.</li>
  
  <li>Na <strong>quinta</strong> somamos 5 à variavel n (n vale 15 agora).</li>
  
  <li>Na <strong>sexta</strong> linha subtraimos 3 à variavel n (n vale 12 agora).</li>
  
  <li>Na <strong>setima</strong> linha multiplicamos n por 2 (n vale 24 agora).</li>
  
  <li>Na <strong>oitava</strong> linha dividimos n por 2 (agora n vale 12).</li>
  
  <li>Na <strong>nona</strong> linha fazemos o resto da divisão de n por 2, (como n vale 12, o resto da divisão de 12 por 2 é 0, logo seu valor agora é 0).</li>
</ul>
Note que ao lado de cada linha temos a operação equivalente na forma que aprendemos anteriormente.

Fica a cargo do leitor colocar printf entre as linhas que ocorrem as operações para verificar o valor de n em cada momento do codigo.

## Operadores de autoincremento e autodecremento

Podemos incrementar e decrementar o valor de uma variavel em 1 unidade usando os operadores ++ e --

<strong>Exemplo:</strong>
```c
#include <stdio.h>
int main () {
  int n = 10;
  n++;
  printf("Valor de n: %d\n", n);
  n--;
  printf("Valor de n: %d\n", n);
} 
```

# Resolvendo o Problema da Divisão.
Vimos em sessões anteriores que a divisão entre inteiros é inteiro no C.

Uma das formas de conseguir a divisão real é usando float em todos as variaveis da operação (tanto num1 e num2 quanto div)
```c
#include <stdio.h>

int main () {

  float num1 = 5;
  float num2 = 2;
  float div = num1 / num2;
  printf("%f", div);
  
  return 0;
}
```
Mas também podemos fazer divisão real de dois numeros inteiros "type casting" (basicamente mudar o tipo dos valores).

```c
#include <stdio.h>

int main () {

  int num1 = 5;
  int num2 = 2;
  float div = (float) num1 / num2;
  printf("%f", div);
  
  return 0;
}
```
Nesse caso os valores são convertidos para float antes da divisão e por isso o resultado é real.


## Função Scanf
Outra função que adiquirimos quando incluimos stdio é a scanf. Essa função é usada para escanear uma resposta do usuario e salvar essa resposta em uma variavel ja definida anteriormente.

<strong>Exemplo:</strong>
```c
#include <stdio.h>

int main () {
  int idade;
  float altura;
  printf("Formulario: \n");
  
  printf("Digite sua idade: ");
  scanf("%d", &idade);

  printf("Digite sua altura (utilize ponto para casas decimais): ");
  scanf("%f", &altura);

  printf("Respostas do Formulario\n");
  printf("Idade: %d\n", idade);
  printf("Altura: %.2f\n", altura);
  return 0;
}
```
<strong>Observações:</strong>

<ul>
  <li>Note que assim como no printf precisamos usar um marcador, mas dessa vez ele serve como um idenficiador do tipo da dado que sera escaneado.</li>
  
  <li>Note que dessa vez usamos a notação %.2f no printf, isso faz com que mostre apenas duas casas decimais do valor float armazenado em altura. Experimente trocar 2 por outro numero e execute o codigo novamente.</li>
</ul>

## Condicionais e Operadores Logicos

Operações logicas podem retornar dois valores
<ul>
  <li>1 - Verdadeiro</li>
  <li>0 - Falso</li>
</ul>
Temos os seguintes operadores logicos:
<ul>
  <li>Igual (==)</li>
  <li>Diferente (!=)</li>
  <li>Menor (<)</li>
  <li>Maior (>)</li>
  <li>Menor ou Igual (<=)</li>
  <li>Maior ou Igual (>=)</li>
</ul>

Exemplo: 
```c
2 == 2;  // 1 Verdadeiro
2 != 2;  // 0 Falso
5 > 3;   // 1 Verdadeiro
3 < 5;   // 0 Falso
```

Utilizando os operadores logicos juntamente com os condicionais podemos executar um bloco de codigo de acordo com uma verificação logica.

Para isso utilizaremos a instrução <strong>if e else</strong>.

```c
if (condição){
  //Codigo a ser executado se condição == 1
} else {
  //Codigo a ser executado se condição == 0
}
```

Vamos fazer um exemplo pratico. Vamos fazer um programa que verifica se o valor de uma variavel é impar ou par. Temos que todos os numeros pares são divisiveis por 2, ou seja:

"Se n é par então n mod 2 = 0. Caso contrario n é impar"

Traduzindo essa ideia em forma de codigo temos:

```c
#include <stdio.h>

int main () {
  int n = 5;

  if (n%2 == 0){
    printf("%d é um numero par!\n", n);
  } else {
    printf("%d é um numero impar!\n", n);
  }
  return 0;
}
```
Experimente mudar o valor da variavel n e execute o codigo novamente.

---

Vamos agora fazer um programa que verifica a idade do usuario e diz se ele não pode votar, tem voto obrigatorio ou voto opicional.

```c
#include <stdio.h>

int main () {
  int idade = 5;

  if (idade < 16) {
    printf("Com essa idade você não pode votar");
  } else if (idade < 18) {
    printf("Com essa idade o voto é opcional");
  } else if (idade < 70) {
    printf("Com essa idade o voto é obrigatorio");
  } else {
    printf("Com essa idade o voto é opcional");
  }

  return 0;
}
```
Dessa vez usamos else if pois queriamos verificar varias condições em seguida e caso nenhuma delas for verdadeira o else sera executado. Em uma estrutura de <strong>if ... else if ... else</strong> apenas um dos blocos sera executado.


## Laço de Repetição For

O laço for é usado quando precisamos executar uma certa ação uma quantidade especifica de vezes. Por exemplo contar até 10, 100, 10000000, algo que seria inviavel fazer linha por linha. 

A estrutura base do for é 

```c
for (int variavel = valor; condição; atuilizaVariavel) {
  // Bloco a ser repetido.
}
```
O for inicializa uma variavel com um valor.

Enquanto a condição (envolvendo a variavel) for verdadeira o bloco sera executado.

A cada final de execução do bloco a variavel é atualizada de acordo com o que foi instruido.

Vamos ver o exemplo de contar até 10.

```c
#include <stdio.h>

int main () {
  for (int n = 1; n <= 10; n++){
    printf("%d ", n);
  }
  return 0;
}
```
Vamos analizar o codigo, ao entrar no for, ele define o valor de n = 1

<ul>
  <li>Apos isso ele verifica se n <= 10, que é verdadeiro</li>
  
  <li>Apos isso ele executa printf e mostra o valor 1 no terminal.</li>
  
  <li>Ao chegar no final do bloco a variavel n é atualizada com n++, ou seja n agora vale 2.</li>
  
  <li>Apos isso ele retorna a verificar a condição n <= 10, tendo que n = 2 implica que n <= 10, ou seja verdadeiro.</li>
  
  <li>Sendo assim executa o bloco. E assim sucessivamente até chegar no n 11, que falha a condição logo o for é encerrado sem executar o bloco.</li>
</ul>

A saida da execução desse codigo será
```
1 2 3 4 5 6 7 8 9 10
```

## Laço de Repetição While

O laço de repetição while é um pouco mais facil de ser compreendido. Ele executa um bloco de codigo enquanto uma condição for verdadeira.
```c
while(condição) {
  // Bloco a ser repetido.
}
```
Diferente do for que tem uma quantidade definida de repetições o while pode executar infinitamente se necessário.

Exemplo:
```c
#include <stdio.h>

int main () {
  int n = 1;
  while (n != 10) {
    printf("Digite 10 para encerrar o looping: ");
    scanf("%d", &n);
  }
  return 0;
}
```
Experimente rodar e digitar numeros diferentes de 10 e no final digite 10.
