# SLOT

É possível termos mais de um slot por componente, por exemplo, para inserirmos conteúdo em locais diferentes do nosso componente. Para isso existe o named slot. Vejamos um exemplo:

```javascript
<template>
    <div>
        <slot name="cabecalho" class="header" ></slot>
        <hr>
        <slot class="body"></slot>
        <hr>
        <slot name="rodape" class="footer"></slot>
    </div>
</template>
<script>
export default {}
</script>

```
Veja que nosso componente possui três slots. Dois nomeados e outro não. Agora, quando ele for utilizado em outro componente podemos fazer:

```javascript
<componente-qualquer>
    <div slot="cabecalho">
        <h1>Bem-vindo!</h1>
    </div>
    <p>Seja bem-vindo à Alura!</p>
    <div slot="rodape">
        <p>copyright 2017</p>
    </div>
</componente-qualquer>

```




# alurapic

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
