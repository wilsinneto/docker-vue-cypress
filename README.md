# Aplicação de form utilizando Docker, Vue e Cypress


### Observação
O Cypress está rodando em container, porém não está encontrando o endpoint executado pela aplicação Vuejs.
Mas pode ser executado os testes conforme a orientação definida na etapa 3.


## Requisito
Docker - @19.03.5 <br/>
Docker Compose - @1.18.0 <br/>
Nodejs - Versão @13.7.0


## 1 - Configuração do projeto
```
npm install
ou
yarn install
```

### 2 - Compila e recarrega para o desenvolvimento
```
npm run serve
ou
yarn serve
```

### 3 - Utilizando teste
Após executar a etapa 2. <br/>
3.2 - Abra um novo Terminal na pasta da aplicação e execute o comando:
```
npm run e2e
ou
yarn e2e
```

3.3 (Opcional) - Caso queira ver os testes sendo executado no Browser, adicione a opção no comando definido para o script "e2e" definido no package.json:
```
cypress run --config video=false --browser chrome
```
Assim, será executado no browser definido ao invés de ser em modo terminal.

Ob.: O browser Firefox está em fase Beta (18/03/2020), e possuí incompatibilidade com o Cypress.


3.4 (Opcional) - Substitua o comando defino para o script "e2e":
```
cypress run --config video=false
```
para o valor default do Cypress
```
cypress open
```

### Ferramenta utilizada
Vue CLI - Versão 4.2.2.

Cypress - Versão 4.1.0

### Frameworks utilizados
Vue.js - Versão 2.6.11.

Bootstrap - Versão 4.4.1.

### Componente utilizado
Vue input mask - Versão 2.0.2.

### Referência de Configuração
1. Ferramenta para criação do projeto Vue.js [Vue CLI](https://cli.vuejs.org).
2. Ferramenta utilizada para execução dos testes [Cypress](https://www.cypress.io).
3. Framework JavaScript utilizado no desenvolvimento [Vue.js](https://vuejs.org).
4. Framework de estilização utilizado na aplicação [Bootstrap](https://getbootstrap.com).
5. Máscara utilizada no formulário [Vue input mask](https://www.npmjs.com/package/v-mask).
