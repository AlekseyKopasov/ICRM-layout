<template>
  <div class="login-page login-page--pass-recovery">
    <form action="/" method="POST">
      <h1 class="title title-middle">Новый пароль</h1>
      <div class="form-group">
        <div class="input-field">
          <input id="register-pass" class="validate" type="password" />
          <label for="register-pass">Новый пароль</label
          ><small>Введите пароль</small>
        </div>
        <div class="input-field">
          <input id="register-pass" class="validate" type="password" />
          <label for="register-pass">Повтрите пароль</label
          ><small>Введите пароль</small>
        </div>
        <button
          class="btn btn-green waves-effect waves-light"
          type="submit"
          name="action"
        >
          Сохранить
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
