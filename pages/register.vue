<template>
  <main class="login-page login-page--register">
    <form action="/" method="POST">
      <h1 class="title title-middle">Регистрация</h1>
      <div class="form-group">
        <div class="input-field">
          <input id="register-email" class="validate" type="email" />
          <label for="register-email">Email</label><small>Введите email</small>
        </div>
        <div class="input-field">
          <input id="register-pass" class="validate" type="password" />
          <label for="register-pass">Пароль</label><small>Введите пароль</small>
        </div>
        <div class="input-field">
          <input id="register-pass-repeat" class="validate" type="password" />
          <label for="register-pass-repeat">Повторите пароль</label
          ><small>Введите пароль</small>
        </div>
        <button
          class="btn btn-green waves-effect waves-light"
          type="submit"
          name="action"
        >
          Зарегистрироваться
        </button>
      </div>
      <div class="form-group form-group__has-account">
        <p>Уже есть аккаут?</p>
        <button
          class="btn waves-effect waves-light"
          type="button"
          name="action"
        >
          Войти
        </button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  layout: 'empty',
}
</script>
