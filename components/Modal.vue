<template>
  <div class="modal-wrap">
    <!-- Modal Trigger -->
    <!-- <a
      class="waves-effect waves-light btn btn-green modal-trigger"
      href="#modal"
      aria-label="Открыть модальное окно с ссылками и контактами"
      >Посмотреть контакты</a
    > -->

    <!-- Modal Structure -->
    <div id="modal" class="modal">
      <div class="modal-content">
        <h1 class="title title-small modal__title">
          <slot name="title">Сохраненные ссылки</slot>
        </h1>
        <button
          class="modal-close waves-effect waves-green btn-flat modal__close"
          type="button"
          aria-label="Закрыть модальное окно"
        >
          Agree
        </button>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
}
</script>
