<template>
  <main>
    <section class="contacts">
      <h1 class="contacts__title title title-large">
        Контакты
      </h1>
      <button
        class="btn waves-effect waves-light profile__info-add-new"
        type="button"
        @click="createContact"
      >
        Добавить новый
      </button>
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
      <div class="contacts-table">
        <div class="contacts-table__header">
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
        <div class="contacts-table__wrap">
          <div v-if="hasEmptyList" class="contacts-table__table">
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
                    <ButtonsAction v-show="!isEditing" :index="index" />
                    {{ index + 1 }}
                  </td>
                  <td>
                    {{ contact.name }}
                  </td>
                  <td>
                    {{ contact.address }}
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
    </section>

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
          <ButtonsAction :index="index" />
        </li>
      </ul>
    </Modal>
  </main>
</template>

<script>
// TODO
// добавить loader для таблицы
// добавить анимацию появления таблицы
// добавить пагинацию для таблицы
import ButtonsAction from '@/components/contacts-table/ButtonsAction'
import Modal from '@/components/Modal'

export default {
  name: 'Contacts',
  layout: 'main-layout',
  components: {
    ButtonsAction,
    Modal
  },
  data() {
    return {
      isHidden: false,
      isActive: true,
      isEditing: false,
      user: null,
      userAvatar: null,
      name: null,
      lastname: null,

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
    }
  },
  created() {
    this.user = this.$store.getters['user-data/user']
    this.userAvatar = this.$store.getters['user-data/user'].avatar
    this.name = this.$store.getters['user-data/user'].name
    this.lastname = this.$store.getters['user-data/user'].lastname
  },
  mounted() {
    this.$materialize.select()
    this.$materialize.updateTextField()

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

        const dataSetTarget = event.target.dataset.type

        const current = dataSetTarget

        const currentList = this.$store.getters[`contacts-table/${current}`]
        this.contactsList = currentList
      }
    },
    modalLinksOpen(arr) {
      this.modalLinks = []
      this.modalLinks = arr
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-trigger {
  max-width: 210px;
  margin: 0 auto;
}
</style>
