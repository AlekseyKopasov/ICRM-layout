<template>
  <aside class="sidebar" :class="{ collapse: isCollapsed }">
    <button
      class="sidebar__button"
      type="button"
      aria-label="Показать или скрыть сайдбар"
      @click="toggleSidebar"
    >
      <span></span>
    </button>
    <ul class="sidebar__menu">
      <li v-for="(item, index) of menu" :key="index" class="sidebar__menu-item">
        <nuxt-link class="sidebar__menu-link" :to="item.link">
          <span class="sidebar__menu-icon">{{ item.icon }}</span>
          <span class="sidebar__menu-title">{{ item.title }}</span>
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data: () => ({
    isCollapsed: false
  }),
  computed: {
    menu() {
      return this.$store.getters['sidebar-menu/menu']
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>
