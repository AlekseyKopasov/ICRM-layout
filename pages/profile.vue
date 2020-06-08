<template>
  <main class="profile">
    <div class="contaiter">
      <h1 class="title title-large">Профиль</h1>
      <div class="profile__user">
        <div class="profile__avatar">
          <img
            class="profile__avatar-image"
            src="../assets/img/test-ava.jpg"
            alt="Аватар"
          />
          <span class="profile__edit">
            <span class="profile__edit-icon">icon</span>
            Изменить
          </span>
        </div>
        <div class="profile__user-data">
          <div class="profile__user-name">
            <p class="profile__firstname">Константин</p>
            <p class="profile__lastname">
              Константинопольский-Константинопольский
            </p>
          </div>
          <span class="profile__edit">
            <span class="profile__edit-icon">icon</span>
            Редактировать
          </span>
        </div>
      </div>
      <div class="profile__info">
        <h2 class="profile__info-title title title-middle">
          Контакты
        </h2>
        <button class="btn profile__info-add-new" type="button">
          Добавить новый
        </button>
        <form action="/" class="profile__add-form">
          <div class="input-field">
            <select>
              <option value="" selected>Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
          </div>
        </form>
        <div class="profile__contacts">
          <div class="profile__contacts-header">
            <h3 class="title title-small active">Поставщики</h3>
            <h3 class="title title-small active">Клиенты</h3>
          </div>
          <div class="profile__contacts-wrap">
            <p>
              Пока нет контактов
              <a href="#">Добавить новый</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'main-layout'
}
</script>
