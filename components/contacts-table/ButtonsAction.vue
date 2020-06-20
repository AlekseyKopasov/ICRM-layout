<template>
  <div class="buttons-action">
    <button
      class="btn btn-green waves-effect waves-light"
      type="button"
      @click="rowEdit"
    >
      {{ index }}
    </button>
    <button
      class="btn red waves-effect waves-light"
      type="button"
      @click="rowDelete"
    >
      X
    </button>
  </div>
</template>

<script>
export default {
  props: ['index'],
  methods: {
    rowEdit() {
      this.$store.commit('contacts-table/editingRow', {
        index: this.$props.index
      })
    },
    rowDelete() {
      this.$store.commit('contacts-table/deleteRow', {
        index: this.$props.index
      })
    }
  }
}
</script>
