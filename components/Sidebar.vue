<template>
  <aside class="sidebar" :class="{ collapse: isCollapsed }">
    <button
      class="sidebar__button"
      type="button"
      aria-label="Показать или скрыть сайдбар"
      @click="toggleSidebar"
    ></button>
    <ul class="sidebar__menu">
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link" href=""
          ><span class="sidebar__menu-icon"></span
          ><span class="sidebar__menu-title">menu item</span></a
        >
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link" href=""
          ><span class="sidebar__menu-icon"></span
          ><span class="sidebar__menu-title">menu item</span></a
        >
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link" href=""
          ><span class="sidebar__menu-icon"></span
          ><span class="sidebar__menu-title">menu item</span></a
        >
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link" href=""
          ><span class="sidebar__menu-icon"></span
          ><span class="sidebar__menu-title">menu item</span></a
        >
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link" href=""
          ><span class="sidebar__menu-icon"></span
          ><span class="sidebar__menu-title">menu item</span></a
        >
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link" href=""
          ><span class="sidebar__menu-icon"></span
          ><span class="sidebar__menu-title">menu item</span></a
        >
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link" href=""
          ><span class="sidebar__menu-icon"></span
          ><span class="sidebar__menu-title">menu item</span></a
        >
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link" href=""
          ><span class="sidebar__menu-icon"></span
          ><span class="sidebar__menu-title">menu item</span></a
        >
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link" href=""
          ><span class="sidebar__menu-icon"></span
          ><span class="sidebar__menu-title">menu item</span></a
        >
      </li>
      <li class="sidebar__menu-item">
        <a class="sidebar__menu-link" href=""
          ><span class="sidebar__menu-icon"></span
          ><span class="sidebar__menu-title">menu item</span></a
        >
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data: () => ({
    isCollapsed: false
  }),
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>
