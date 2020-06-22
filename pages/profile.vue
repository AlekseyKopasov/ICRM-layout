<template>
  <main class="profile">
    <div class="contaiter">
      <h1 class="title title-large">Профиль</h1>
      <div class="profile__user">
        <div class="profile__avatar">
          <img
            ref="avatar"
            class="profile__avatar-image"
            :src="require(`@/assets/img/${userAvatar}`)"
            alt="Аватар"
          />
          <form action="/">
            <div class="file-field input-field">
              <button class="profile__edit-btn" type="button">
                <span>
                  <svg-icon name="isrm-sprite/edit" />
                  <input ref="avatar-input" type="file" />
                </span>
                Изменить
              </button>
              <div class="file-path-wrapper">
                <input
                  class="file-path validate"
                  type="text"
                  @change="changeAvatar"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="profile__user-data">
          <div class="profile__user-name">
            <button
              class="profile__edit-btn"
              :class="{ hide: isHidden }"
              type="button"
              @click="changeUserName"
            >
              <span>
                <svg-icon name="isrm-sprite/edit" />
              </span>
              Редактировать
            </button>
            <div class="profile__user-name-wrap" :class="{ hide: isHidden }">
              <p class="profile__firstname">{{ name }}</p>
              <p class="profile__lastname">{{ lastname }}</p>
            </div>
          </div>
          <form
            action="/"
            class="profile__user-name-edit"
            :class="{ hide: !isHidden }"
            @submit.prevent="saveUserName"
          >
            <div class="input-field">
              <label for="user-name">Имя</label>
              <input id="user-name" v-model="name" type="text" required />
            </div>
            <div class="input-field">
              <label for="user-lastname">Фамилия</label>
              <input
                id="user-lastname"
                v-model="lastname"
                type="text"
                required
              />
            </div>
            <button
              class="btn waves-effect waves-light profile__user-edit-save"
              type="submit"
            >
              Сохранить
            </button>
          </form>
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
            <h3
              class="title title-small"
              :class="{ active: isActive }"
              data-type="suppliers"
              @click="showContactsTable()"
            >
              Поставщики
            </h3>
            <h3
              class="title title-small"
              :class="{ active: !isActive }"
              data-type="clients"
              @click="showContactsTable()"
            >
              Клиенты
            </h3>
          </div>
          <div class="profile__contacts-wrap">
            <div v-if="hasEmptyList" class="contacts-table">
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
                  <tr v-for="(contact, index) of contactsList" :key="index">
                    <td>
                      <ButtonsAction v-show="editing" :index="index" />
                      {{ index + 1 }}
                    </td>
                    <td>
                      <div v-if="editing">
                        {{ contact.name }}
                      </div>
                      <div v-else class="input-field">
                        <label for="edit-name">Email</label>
                        <input id="edit-name" type="text" />
                      </div>
                    </td>
                    <td>
                      <div v-if="editing">
                        {{ contact.address }}
                      </div>
                      <div v-else class="input-field">
                        <label for="edit-name">Email</label>
                        <input id="edit-name" type="text" />
                        <button>Save</button>
                      </div>
                    </td>
                    <td>
                      <a
                        class="waves-effect waves-light btn btn-green modal-trigger"
                        href="#modal"
                        aria-label="Открыть модальное окно с ссылками и контактами"
                        @click="modalLinksOpen(contact.links)"
                        >Посмотреть контакты</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p v-else>
              Пока нет контактов. Добавьте новый.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Modal>
      <template v-slot:title>Сохраненные ссылки</template>

      <ul class="modal__list">
        <li
          v-for="(item, index) in modalLinks"
          :key="index"
          class="modal__item"
        >
          <h4 class="modal__item-title">{{ item.name }}</h4>
          <a href="#" class="modal__link">{{ item.link }}</a>
          <ButtonsAction />
        </li>
      </ul>
    </Modal>

    <!-- <div v-if="editing">Edit</div>
    <div v-else>No Edit</div> -->
  </main>
</template>

<script>
/* eslint-disable */
import ButtonsAction from '@/components/contacts-table/ButtonsAction'
import Modal from '@/components/Modal'

export default {
  layout: 'main-layout',
  components: {
    ButtonsAction,
    Modal
  },
  data() {
    return {
      // TODO рефакторинг дата
      isHidden: false,
      isActive: true,
      isEditing: false,
      user: this.$store.getters['user-data/user'],
      userAvatar: this.$store.getters['user-data/user'].avatar || '',
      name: this.$store.getters['user-data/user'].name || '',
      lastname: this.$store.getters['user-data/user'].lastname || '',

      createFormShow: false,
      contactsList: [],
      modalLinks: []
    }
  },
  computed: {
    info() {
      return this.user
    },
    hasEmptyList() {
      return this.contactsList
    },
    editing() {
      this.isEditing = this.$store.getters['contacts-table/isEditingRow']
      console.log(this.isEditing)
      return this.isEditing
    }
  },
  mounted() {
    this.$materialize.select()

    if (this.user.name.length === 0 || this.user.lastname.length === 0) {
      this.isHidden = true
    }

    this.contactsList = this.$store.getters['contacts-table/suppliers']
  },
  methods: {
    createContact() {
      this.createFormShow = true
    },
    changeUserName() {
      this.isHidden = true
    },
    saveUserName() {
      this.isHidden = false
      this.$store.commit('user-data/setUser', {
        name: this.name,
        lastname: this.lastname
      })
    },
    async changeAvatar(e) {
      const readURL = file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = e => resolve(e.target.result)
          reader.onerror = e => reject(e)
          reader.readAsDataURL(file)
        })
      }

      const file = this.$refs['avatar-input'].files[0]
      const url = await readURL(file)
      this.$store.commit('user-data/setUser', {
        avatar: file.name
      })
      this.$refs.avatar.src = url
    },
    showContactsTable() {
      if (!event.target.classList.contains('active')) {
        this.isActive = !this.isActive

        // добавить loader для таблицы
        // добавить анимацию появления таблицы
        const dataSetTarget = event.target.dataset.type

        const current = dataSetTarget

        const currentList = this.$store.getters[`contacts-table/${current}`]
        this.contactsList = currentList
      }
    },
    modalLinksOpen(arr) {
      this.modalLinks = []
      this.modalLinks = arr
    },
    test() {
      const a = this.$on('editingRow')
      console.log('editingRow', a)
    }
    // async onEditRow(cur) {
    //   const st = this.$root.$on('editingRow')
    //   this.isEditing = await this.$store.getters['contacts-table/editingRow']
    //   console.log(st)
    // },
    // onDeleteRow() {
    //   // console.log('del')
    // }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

.file-field,
.input-field,
.input-field input[type='text']:not(.browser-default) {
  margin: 0;
  padding: 0;
}

.file-path-wrapper {
  display: none;
}

.modal-trigger {
  max-width: 210px;
  margin: 0 auto;
}
</style>
