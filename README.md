# Estudos Vue JS
## Estudos realizados atráves do livro Front-End Com Vue.js
### Autor: Leonardo Vilarinho

---
``Este repositorio foi feito com o intuito de acessar mais rapido dados repassados pelo livro, estarei resumindo alguns conhecimentos adquiridos durante a leitura.``

---

## Manipuladores de dados

[Formas de Manipular dados](https://github.com/PedroHumberto/estudosVueJs/tree/master/manipulando-dados/src)

* **Methods**: Manipuladores de dados mais simples, responsavel por guardar trechos de codigo, recebendo ou não parametros. Exemplos: Botão de reverter uma palavra, botão que calcula algo...

* **Watch**: Mudam seu valor de acordo com o dado que representam, com ela podemos capturar o novo e antigo valor da varável tomando ações customaizadas a partir disso. Util para executar ações assincronas como requisições à API extern, em que devemos observar se a API retornou os dados.

* **Filters**: Este atributo ele é chamado toda vez que ocorre uma alteração de variavel no sistema, usado apenas para formatar a variavel deixando ela mais agradavel. Ex: Pegar uma palavra com letra minuscula e deixar com letra maiscula:



* **Computed**: Diferente do filter o computed altera uma variavel e é possivel usar os metodos getter e setter

---
## Uso de Componentes:

[Exemplo de uso](https://github.com/PedroHumberto/estudosVueJs/tree/master/componentes-juntos/src)

Com o objetivo de deixar o codigo mais coeso é criado componentes para ser entregue ao App.vue, separando a função de cada um. Um botão, um dado, uma lista, cada um destes seria um componente a ser criado e implementado ao App.vue

---
---

# Reutilizando Componentes

## Props - Recebendo Atributo Externo
[Exemplo de Uso](https://github.com/PedroHumberto/estudosVueJs/tree/master/props-receb-atrib-externos/src)

Metodo usado para reaproveitar os componentes já criados.

Podemos criar componentes sem design e importar seus atributos para outros, como tambem deixar um componente mais aberto, passando atributos externos.

No props é são definidas variaveis imutaveis, tornando. O que torna mais facil reusar.

O atributo ``props`` de um componente é usado para receber dados externos.

No exemplo usado é utilizado uma forma mais facil de ordenar e passar uma lista. Ao invés de iterar sobre uma lista e depois fazer um metodo para ordenar a lista, você pode passar o codigo direto utilizando o ``props``.

``Atributo created() = é um metódo, assim que chamado no momento em que o componente é invocado e antes de ser desenhado na tela. Executado antes do metodo 'mounted()'``

---

## Mixins

[Exemplo de Uso](https://github.com/PedroHumberto/estudosVueJs/tree/master/mixins/src)

Seu papel é permitir reusar os atributos em outros componentes como: Filters, methods, computed...
Estabelecendo uma especia de herança.

No exemplo é adotada a ideia de que no blog todas as postanges devem ter titulos upercase e negrito.
Para não ficarmos criando filter em cada componente pode ser feito um bloco de codigo responsavel pela codigo que conteria o codigo.


Sendo assim é criado um arquivo ``postagem.js`` contendo o sequinte codigo:
```javascript
export default{
    filters: {
        maiusculo: (valor) =>{
            return valor.toUpperCase()
        }
    }
}
```

---
## Emit - Comunicação Entre Componentes

[Exemplo de Uso](https://github.com/PedroHumberto/estudosVueJs/tree/master/emit/src)

Utilizado para comunicar a um componente que outro foi alterado. Fazendo com que um componente emita um sinal para outro, podendo enviar dados se necessário.

<blockquote> 
    O blog em que você tem um componente que filtra os posts que recebem mais curtidas. Então, o componente curtida deve notificar ao que filtra os posts mais curtidos que uma postagem teve mais um like, fazendo com que a lista de mais curtidas altere em tempo real
</blockquote>

O exemplo que é utilizado é um microchat onde quando a mensagem é digitada e termina ela é exivida na tela principal do projeto.

Este exemplo demostrar um componente filho ***LvUsuario.vue*** se comunicando com o componente pai ***App.vue***
