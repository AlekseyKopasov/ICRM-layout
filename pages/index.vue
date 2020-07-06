<template>
  <div class="index-page">
    <h2 class="title title-middle">ICRM</h2>
    <ul>
      <li>
        <nuxt-link to="/register">register.html --- Регистрация</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/login">login.html --- Вход</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/pass-recovery-send"
          >pass-recovery-send.html --- Востановить пароль(отправить
          запрос)</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/pass-recovery-save"
          >pass-recovery-save.html --- Востановить пароль(сохранить
          новый)</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/profile">profile.html --- Профиль</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contacts">contacts.html --- Контакты</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/modal">modal.html --- Модальное окно</nuxt-link>
      </li>
      <hr />
      <li>
        <nuxt-link to="/components">components.html --- UI KIT</nuxt-link>
      </li>
    </ul>
  </div>
</template>
