<template>
  <div class="login-page">
    <form action="/" method="POST">
      <h1 class="title title-middle">Добро пожаловать!</h1>
      <div class="form-group">
        <div class="input-field">
          <input id="register-email" class="validate" type="email" />
          <label for="register-email">Email</label><small>Введите email</small>
        </div>
        <div class="input-field">
          <input id="register-pass" class="validate" type="password" />
          <label for="register-pass">Пароль</label><small>Введите пароль</small>
        </div>
      </div>
      <div class="form-group form-group__login">
        <button
          class="btn btn-green waves-effect waves-light"
          type="submit"
          name="action"
        >
          Войти</button
        ><a href="#">Забыли пароль?</a>
      </div>
      <div class="form-group form-group__has-account">
        <p>Еще нет аккаута?</p>
        <button
          class="btn waves-effect waves-light"
          type="button"
          name="action"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'empty',
}
</script>
