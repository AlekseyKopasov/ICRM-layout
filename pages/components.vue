<template>
  <div class="ui-kit">
    <ul>
      <h1 class="title title-large">UI KIT</h1>
      <li>
        <div class="titles">
          <h2 class="title title-middle title-ui">Заголовки</h2>
          <ul>
            <li>
              <h1 class="title title-large">Title large 50px</h1>
            </li>
            <li>
              <h2 class="title title-middle">Title middle 34px</h2>
            </li>
            <li>
              <h3 class="title title-small">Title small 24px</h3>
            </li>
          </ul>
        </div>
      </li>

      <li>
        <form>
          <h2 class="title title-middle title-ui">Поля формы</h2>
          <div class="form-group">
            <div class="input-field">
              <input id="email" class="validate" type="email" />
              <label for="email">Email</label><small>Введите email</small>
            </div>
            <div class="input-field">
              <input id="pass" class="validate" type="password" />
              <label for="pass">Пароль</label><small>Введите пароль</small>
            </div>
            <div class="input-field">
              <input id="pass-repeat" class="validate" type="password" />
              <label for="pass-repeat">Повторите пароль</label
              ><small>Введите пароль</small>
            </div>
          </div>
        </form>
      </li>
      <li>
        <ul class="buttons">
          <h2 class="title title-middle title-ui">Кнопки</h2>
          <li>
            <button class="btn btn-blue waves-effect waves-light">
              Отправить
            </button>
          </li>
          <li>
            <button class="btn waves-effect waves-light">Подтвердить</button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'empty',
}
</script>
