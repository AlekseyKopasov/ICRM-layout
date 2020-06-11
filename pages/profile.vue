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
          <button
            class="btn waves-effect waves-light profile__info-add-new"
            type="button"
            @click="createContact"
          >
            Добавить новый
          </button>
        </h2>
        <form v-show="createFormShow" action="/" class="contacts-form">
          <div class="contacts-form__wrap">
            <div class="contacts-form__title">
              <h4 class="title title-small">Категория</h4>
            </div>
            <div class="contacts-form__field">
              <div class="input-field">
                <select class="select contacts-form__select">
                  <option value="1" selected>Поставщики</option>
                  <option value="2">Клиенты</option>
                </select>
              </div>
            </div>
          </div>

          <div class="contacts-form__wrap">
            <div class="contacts-form__title">
              <h4 class="title title-small">Название</h4>
            </div>
            <div class="contacts-form__field">
              <input type="text" placeholder="Заголовок контакта" />
            </div>
          </div>

          <div class="contacts-form__wrap">
            <div class="contacts-form__title">
              <h4 class="title title-small">Адрес</h4>
            </div>
            <div class="contacts-form__field contacts-form__field--address">
              <div class="contacts-form__address">
                <label>
                  <input
                    id="form-address"
                    class="contacts-form__checkbox"
                    type="checkbox"
                  />
                  <span>Добавить адрес</span>
                </label>
              </div>
              <input type="text" placeholder="Введите адрес" />
            </div>
          </div>

          <div class="contacts-form__wrap contacts-form__wrap--links">
            <div class="contacts-form__title">
              <h4 class="title title-small">Ссылки</h4>
            </div>
            <div class="contacts-form__field">
              <div class="input-field">
                <select class="select contacts-form__select">
                  <option value="1" selected>Сайт</option>
                  <option value="2">Социальная сеть</option>
                  <option value="3">Месседжер</option>
                  <option value="4">Email</option>
                  <option value="5">Телефон</option>
                </select>
              </div>
              <div class="contacts-form__links-wrap">
                <input type="text" placeholder="Название" />
                <input type="text" placeholder="Ссылка" />
                <button
                  class="btn btn-green waves-effect waves-light"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            class="btn waves-effect waves-light contacts-form__submit"
            type="submit"
          >
            Сохранить контакт
          </button>
        </form>
        <div class="profile__contacts">
          <div class="profile__contacts-header">
            <h3 class="title title-small active">Поставщики</h3>
            <h3 class="title title-small active">Клиенты</h3>
          </div>
          <div class="profile__contacts-wrap">
            <p>
              Пока нет контактов. Добавьте новый.
            </p>
            <div class="contacts-table">
              <table class="responsive-table highlight">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Адрес</th>
                    <th>Ссылки</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <ButtonsAction />
                      1
                    </td>
                    <td>
                      Lorem ipsum dolor sit amet.
                    </td>
                    <td>Россия, Нижний Новгород, ул. Мира 25</td>
                    <td>
                      <ul class="contacts-table__list">
                        <li><span>Телеграмм</span> <a href="">www.t.me</a></li>
                        <li>
                          <span>Skype</span> <a href="">www.t.me/example</a>
                        </li>
                        <li>
                          <span>Email</span>
                          <a href="">konstantinopolsky@gmail.com</a>
                        </li>
                        <li><span>VK</span> <a href="">www.t.me</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ButtonsAction />
                      2
                    </td>
                    <td>Alan</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <ButtonsAction />
                      3
                    </td>
                    <td>Jonathan</td>
                    <td>Россия, Нижний Новгород, ул. Мира 25</td>
                    <td>
                      <button
                        class="btn btn-green waves-effect waves-light contacts-table__btn"
                        type="button"
                      >
                        Посмотреть контакты
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ButtonsAction from '@/components/contacts-table/ButtonsAction'

export default {
  layout: 'main-layout',
  components: {
    ButtonsAction
  },
  data() {
    return {
      createFormShow: false
    }
  },
  mounted() {
    this.$materialize.select()
  },
  methods: {
    createContact() {
      this.createFormShow = true
    }
  }
}
</script>
