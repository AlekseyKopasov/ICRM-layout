<template>
  <header class="header">
    <div class="header__logo-wrap">
      <div class="header__logo">
        <span class="header__logo-text">Weddings and...</span
        ><span class="header__logo-descr">My notebook and planner</span>
      </div>
    </div>
    <div class="header__notification">
      <a class="dropdown-trigger" href="#" data-target="dropdown-header">
        <svg-icon name="isrm-sprite/notifications" />
        <!-- <svg width="24" height="24" aria-hidden="true">
            <use xlink:href="img/sprite.svg#notifications"></use>
          </svg> -->
      </a>
      <ul
        id="dropdown-header"
        class="header__notification-list dropdown-content"
        data-simplebar="data-simplebar"
      >
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Напоминание такое-то о том-то и том-то
            <span>
              <svg-icon name="isrm-sprite/info" />
              <!-- <svg width="24" height="24" aria-hidden="true">
                <use xlink:href="img/sprite.svg#info"></use></svg> -->
            </span>
          </a>
        </li>
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Еще одно большое напоиминапие: позвонить, написать Еще одно большое
            напоиминапие: позвонить, написать Еще одно большое напоиминапие:
            позвонить, написать Еще одно большое напоиминапие: позвонить,
            написать
            <span>
              <svg-icon name="isrm-sprite/info" />
              <!-- <svg width="24" height="24" aria-hidden="true">
                <use xlink:href="img/sprite.svg#info"></use></svg> -->
            </span>
          </a>
        </li>
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Еще одно большое напоиминапие: позвонить, написать
            <span>
              <svg-icon name="isrm-sprite/info" />
              <!-- <svg width="24" height="24" aria-hidden="true">
                <use xlink:href="img/sprite.svg#info"></use></svg> -->
            </span>
          </a>
        </li>
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Еще одно большое напоиминапие: позвонить, написать
            <span>
              <svg-icon name="isrm-sprite/info" />
              <!-- <svg width="24" height="24" aria-hidden="true">
                <use xlink:href="img/sprite.svg#info"></use></svg> -->
            </span>
          </a>
        </li>
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Еще одно большое напоиминапие: позвонить, написать
            <span>
              <svg-icon name="isrm-sprite/info" />
              <!-- <svg width="24" height="24" aria-hidden="true">
                <use xlink:href="img/sprite.svg#info"></use></svg> -->
            </span>
          </a>
        </li>
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Еще одно большое напоиминапие: позвонить, написать
            <span>
              <svg-icon name="isrm-sprite/info" />
              <!-- <svg width="24" height="24" aria-hidden="true">
                <use xlink:href="img/sprite.svg#info"></use></svg> -->
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="header__nav">
      <a class="dropdown-trigger" href="#" data-target="dropdown-header">
        <svg-icon name="isrm-sprite/person" />
        <!-- <svg width="25" height="25" aria-hidden="true">
          <use xlink:href="img/sprite.svg#person"></use></svg> -->
      </a>
      <ul id="dropdown-header" class="header__user-nav dropdown-content">
        <li class="header__user-item">
          <a class="header__user-link" href="#">Профиль</a>
        </li>
        <li class="header__user-item">
          <a class="header__user-link" href="#">Настройки</a>
        </li>
        <li class="divider" tabindex="-1"></li>
        <li class="header__user-item">
          <a class="header__user-link" href="#">Выйти</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header__notification svg,
.header__nav svg {
  width: 24px;
  height: 24px;
}
</style>
