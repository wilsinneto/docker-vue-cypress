<template>
  <div id="app">
    <form
      enctype="application/json"
      @submit.prevent="verificarForm"
      action="https://localhost:8080"
      method="POST"
    >
      <div class="col">
        <div class="alert alert-danger" role="alert" v-if="errors.length">
          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="nome">Nome:</label>
          <!-- &nbsp; -->
          <input
            id="nome"
            type="text"
            name="nome"
            class="form-control"
            v-model.trim="nome"
            maxlength="100"
            placeholder="Digite nome completo"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <label for="opcao">Como nos conheceu:</label>
          <select id="opcao" class="form-control" v-model="opcao" name="opcao">
            <option>TV</option>
            <option>Internet</option>
            <option>Outros</option>
          </select>
        </div>

        <div class="col-md-5">
          <label for="telefone">Telefone:</label>
          <input
            id="telefone"
            type="text"
            name="telefone"
            class="form-control"
            v-model.trim="telefone"
            v-mask="'## – ########'"
            placeholder="99 – 99999999"
          />
        </div>
      </div>
      <div class="row redes_social">
        <div class="col-md-7">
          <label for="social">Possuí rede social:</label>
          <div id="radios">
            <div>
              <input
                type="radio"
                name="social"
                class="form-group"
                id="sim"
                v-on:click="picked = true"
                value="1"
              />
              <label for="sim">Sim</label>
            </div>
            <div>
              <input
                type="radio"
                name="social"
                class="form-group"
                id="nao"
                v-on:click="picked = false"
                value="0"
                checked
              />
              <label for="nao">Não</label>
            </div>
          </div>
        </div>

        <div class="col-md-5" v-if="picked">
          <label>Quais:</label>
          <div>
            <div>
              <input
                type="checkbox"
                name="facebook"
                id="facebook"
                class="form-check-input"
                value="facebook"
                v-model="redeSocial"
              />
              <label for="facebook">Facebook</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="linkedin"
                id="linkedin"
                class="form-check-input"
                value="linkedin"
                v-model="redeSocial"
              />
              <label for="linkedin">Linkedin</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="instagram"
                id="instagram"
                class="form-check-input"
                value="instagram"
                v-model="redeSocial"
              />
              <label for="instagram">Instagram</label>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="botao col">
          <input
            type="submit"
            class="btn btn-outline-primary btn-lg btn-block"
            aria-pressed="true"
            v-bind:disabled="disabled == 1"
            value="Enviar"
          />
        </div>
      </div>
    </form>
    <!-- Descomente abaixo para visualizar os dados do form sendo enviados em formato JSON na página -->
    <!-- <p>{{$data}}</p> -->
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "App",
  data() {
    return {
      errors: [],
      nome: "",
      telefone: "",
      opcao: "",
      picked: false,
      redeSocial: [],
      disabled: 0
    };
  },
  methods: {
    removerEspacosExtras() {
      return this.nome.replace(/\s+/g, " ");
    },
    formatarNumero() {
      return this.telefone.replace(/\s+/g, "").replace("–", "");
    },
    validaNome() {
      let valor = this.removerEspacosExtras();

      let array = valor ? valor.split(" ") : "";

      if (array.length > 1) {
        for (let index = 0; index < array.length; index++) {
          const element = array[index];

          if (element.length < 3) {
            this.errors.push(
              "Nome e sobrenome devem conter no mínimo três carácteres cada."
            );
            break;
          }
        }
        this.nome = array.join(" ");
      } else {
        valor.length > 0
          ? this.errors.push("Nome deve conter ao menos sobrenome.")
          : this.errors.push("O nome é obrigatório.");
      }
    },
    validaTelefone() {
      let valor = this.formatarNumero();

      if (valor.length < 10 && valor.length > 0)
        this.errors.push("Número do telefone Inválido.");

      !valor.length
        ? this.errors.push("Informe o número do telefone.")
        : (this.telefone = valor);
    },
    verificaRedeSocial() {
      if (this.picked === false) this.redeSocial = [];
      if (this.picked === true && !this.redeSocial.length)
        this.errors.push("Selecione qual rede social você utilza.");
    },
    verificarForm() {
      this.errors = [];

      this.validaNome();
      this.validaTelefone();
      this.verificaRedeSocial();

      if (!this.errors.length) {
        this.disabled = (this.disabled + 1) % 2;
        return true;
      }
    }
  }
};
</script>

<style>
form {
  width: 465px;
  height: 294px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
div {
  padding: 5px 0;
}
.redes_social {
  height: 100px;
}
#radios {
  width: 115px;
  margin-left: 145px;
  margin-top: -37px;
}
#radios > div {
  display: inline;
  margin: auto;
  margin-right: 10px;
}
#radios > div > input {
  margin-right: 5px;
}
div > div > div {
  width: 130px;
  margin-left: 40px;
  margin-top: -20px;
}
/* Media Query */
@media (max-width: 780px) {
  .botao {
    margin-top: 30px;
  }
}
@media (max-width: 500px) {
  form {
    width: 400px;
  }
}
</style>
