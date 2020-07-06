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
    </div>
  </main>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'main-layout',
  data() {
    return {
      isHidden: false,
      userAvatar: null,
      name: null,
      lastname: null
    }
  },
  computed: {
    info() {
      return this.user
    }
  },
  created() {
    this.user = this.$store.getters['user-data/user']
    this.userAvatar = this.$store.getters['user-data/user'].avatar
    this.name = this.$store.getters['user-data/user'].name
    this.lastname = this.$store.getters['user-data/user'].lastname
  },
  mounted() {
    this.$materialize.updateTextField()

    if (this.user.name.length === 0 || this.user.lastname.length === 0) {
      this.isHidden = true
    }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

.file-path-wrapper {
  display: none;
}

.profile__avatar form {
  width: 100%;
}

.profile__avatar .file-field {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
