<template>
  <main class="login-page login-page--register">
    <v-form ref="form" v-model="valid" :lazy-validation="lazy" method="POST">
      <h1 class="title title-middle">Регистрация</h1>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        type="email"
        required
      ></v-text-field>

      <v-text-field
        v-model="pass"
        :rules="passRules"
        label="Пароль"
        type="password"
        required
      ></v-text-field>

      <v-text-field
        v-model="passRepeat"
        :rules="passRepeatRules"
        label="Повторите пароль"
        type="password"
        required
      ></v-text-field>

      <v-btn
        class="btn-green"
        :disabled="valid"
        type="submit"
        color="success"
        @click="validate"
      >
        Зарегистрироваться
      </v-btn>

      <div class="form__has-account">
        <p>Уже есть аккаут?</p>
        <v-btn class="" color="info" type="button">
          Войти
        </v-btn>
      </div>
    </v-form>
  </main>
</template>

<script>
export default {
  layout: 'empty',
  data: () => ({
    valid: true,
    email: '',
    pass: '',
    passRepeat: '',
    emailRules: [
      v => !!v || 'Введите E-mail',
      v => /.+@.+\..+/.test(v) || 'Введите корректный E-mail',
    ],
    passRules: [
      v => !!v || 'Введите пароль',
      v => (v && v.length >= 6) || 'Пароль не может быть короче 6 символов',
    ],
    passRepeatRules: [
      v => !!v || 'Повторите пароль',
      // v => v !== this. || 'Введите корректный E-mail',
    ],
    lazy: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Questrial');

.v-application {
  font-family: 'Questrial' !important;
}
</style>
