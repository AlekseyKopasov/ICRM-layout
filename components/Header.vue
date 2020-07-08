<template>
  <header class="header">
    <div class="header__logo-wrap">
      <div class="header__logo">
        <span class="header__logo-text">Weddings and...</span
        ><span class="header__logo-descr">My notebook and planner</span>
      </div>
    </div>
    <div class="header__notification">
      <a class="dropdown-trigger" href="#" data-target="dropdown-info">
        <svg-icon name="isrm-sprite/notifications" />
      </a>
      <ul id="dropdown-info" class="header__notification-list dropdown-content">
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Напоминание такое-то о том-то и том-то
            <span>
              <svg-icon name="isrm-sprite/info" />
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
            </span>
          </a>
        </li>
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Еще одно большое напоиминапие: позвонить, написать
            <span>
              <svg-icon name="isrm-sprite/info" />
            </span>
          </a>
        </li>
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Еще одно большое напоиминапие: позвонить, написать
            <span>
              <svg-icon name="isrm-sprite/info" />
            </span>
          </a>
        </li>
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Еще одно большое напоиминапие: позвонить, написать
            <span>
              <svg-icon name="isrm-sprite/info" />
            </span>
          </a>
        </li>
        <li class="header__notification-item">
          <a class="header__notification-link" href="#" title=""
            >Еще одно большое напоиминапие: позвонить, написать
            <span>
              <svg-icon name="isrm-sprite/info" />
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="header__nav">
      <a class="dropdown-trigger" href="#" data-target="dropdown-nav">
        <svg-icon name="isrm-sprite/person" />
      </a>
      <ul id="dropdown-nav" class="header__user-nav dropdown-content">
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
export default {
  mounted() {
    this.$materialize.dropdown({
      hover: true
    })
  },
  beforeDestroy() {
    this.$materialize.dropdown({ destroy: true }) // TODO уточнить, как правильно
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/general/main';

.header {
  position: relative;
  width: 100%;
  max-height: 64px;
  z-index: 1;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: stretch;
  justify-content: flex-end;
}

.header__nav {
  position: relative;
  margin-right: 10px;
}

.header__notification svg,
.header__nav svg {
  width: 24px;
  height: 24px;
}

.header__logo-wrap {
  display: flex;
  align-items: center;
  margin-right: auto;
  max-width: 20%;
  width: 100%;
  background-color: lighten($color-indigo-hex, 40);
  box-shadow: 4px 0 4px -4px rgba($color-black-hex, 0.2);
}

.header__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.header__logo-text {
  margin-bottom: -3px;
  font-family: $title-font;
  font-size: 24px;
  text-decoration: underline;
}

.header__logo-descr {
  font-size: 14px;
}
// сброс стилей materilize.css

.header .dropdown-trigger {
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: $color-gray;
    transition: opacity $transition-props;
  }

  &:hover,
  &:focus {
    svg {
      fill: $color-indigo;
      opacity: 0.7;
    }
  }

  &:active {
    opacity: 1;
    fill: rgba($color-gray-dark-hex, 0.3);
  }
}

.header .dropdown-content {
  left: auto;
  top: 51px;
  right: 42px;
}

.header .dropdown-content li > a,
.header .dropdown-content li > span {
  padding: 17px 29px;
  font-family: $main-font;
  font-size: 18px;
  line-height: 1.2;
  color: $color-black;

  transition: color $transition-props;
}

.header .dropdown-content li > a {
  @include basic-hover-effect();

  &:active {
    color: $color-gray;
  }
}

.header__notification {
  position: static;
  max-width: 65px;
}

.header__notification .dropdown-trigger {
  display: inline-flex;
  margin-left: auto;
}

.header__notification-list.dropdown-content {
  top: -12px;
  right: -37px;
  transform: translateX(-100%);

  & li > a {
    padding: 17px 30px;
    padding-left: 40px;
  }
}

.header__notification-list {
  max-height: 220px;
  min-width: 380px;
}

.header__notification-item {
  max-width: 380px;
}

.header__notification-link {
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// .header__notification-link span {
//   position: absolute;
//   top: 0;
//   left: 0;
//   display: block;
//   width: 50px;
//   height: 100%;
// }

.header__notification-link svg {
  position: absolute;
  top: 18px;
  left: 10px;
  width: 20px;
  height: 20px;
  fill: $color-green;
}
</style>
