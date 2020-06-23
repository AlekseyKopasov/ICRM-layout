<template>
  <div class="login-page login-page--pass-recovery">
    <form action="/" method="POST">
      <h1 class="title title-middle">Восстановить пароль</h1>
      <div class="form-group">
        <div class="input-field">
          <input id="register-email" class="validate" type="email" /><i
            class="material-icons tiny"
            >email</i
          >
          <label for="register-email">Email</label><small>Введите email</small>
        </div>
        <button
          class="btn btn-green waves-effect waves-light"
          type="submit"
          name="action"
        >
          Отправить
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
