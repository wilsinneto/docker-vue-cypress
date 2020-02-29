# Elogroup - Desafio de Programação


## Requisito
Nodejs - Versão @^13.7.0


## Configuração do projeto
```
npm install
ou
yarn install
```

### Compila e recarrega para o desenvolvimento
```
npm run serve
ou
yarn serve
```

### Compila e minifica para produção
```
npm run build
ou
yarn build
```

### Arquivos Lints e fixes
```
npm run lint
ou
yarn lint
```


### Ferramenta utilizada
Vue CLI - Versão 4.2.2.

### Frameworks utilizados
Vue.js - Versão 2.6.11.

Bootstrap - Versão 4.4.1.

### Componente utilizado
Vue input mask - Versão 2.0.2.


### Estrutura do Projeto

<b>public</b>: 
  - <b>index.html</b>: Esse é o arquivo principal da nossa aplicação, ele renderizarar nossa app pois ele contem a:

```
<div id=”app”></div>
```

<b>src</b>: Onde fica nossos códigos fontes, sendo eles componentes, plugins, assets 
  pré-processados, routers e outros diretórios.
     
  - <b>assets</b>: Onde ficam os ativos importados nos componentes. Ex.: Imagens.

  - <b>App.vue</b>: Este é o componente raiz que conterá a visualização principal do aplicativo.
  - <b>main.js</b>: Este arquivo é responsável por inicializar o aplicativo Vue.


<b>.gitignore</b>: arquivo do controle de versão que contém o que não deve ser enviado quando o projeto é "commitado"

<b>.babel.config.js</b>: Possui diferentes extensões para o .babelsrc.js que é o transpiler, ou seja, converte EcmaScript 6 em EcmaScript 5 para que os navegadores que ainda não suportam as versões mais recentes do EcmaScript passem a compreender.

<b>.package-lock.json</b>: Descreve a árvore exata que foi gerada, de forma que as instalações subsequentes possam gerar árvores idênticas, independentemente das atualizações intermediárias de dependência.

<b>package.json</b>: O metarquivo do pacote NPM/YARN que contém todas as dependências e comandos de compilação.

<b>README.md</b>: Contém as instruções necessárias para a utilização do projeto.

<b>yarn.lock</b>: Gerenciador de pacotes do NodeJS.


### Nome utilizado na plataforma Gupy
Nome: <b>Wilson Neto</b>


### Referência de Configuração
1. Ferramenta para criação do projeto Vue.js [Vue CLI](https://cli.vuejs.org).
2. Framework JavaScript utilizado no desenvolvimento [Vue.js](https://vuejs.org).
3. Framework de estilização utilizado na aplicação [Bootstrap](https://getbootstrap.com).
4. Máscara utilizada no formulário [Vue input mask](https://www.npmjs.com/package/v-mask).
