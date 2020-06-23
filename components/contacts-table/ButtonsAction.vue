<template>
  <div class="buttons-action">
    <button
      class="btn btn-green waves-effect waves-light"
      type="button"
      @click="editingRow"
    >
      {{ index }}
    </button>
    <button
      class="btn red waves-effect waves-light"
      type="button"
      @click="deleteRow"
    >
      X
    </button>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    editingRow() {
      this.$bus.$emit('editingRow', this.$props.index)
      // this.$store.commit('contacts-table/editingRow', {
      //   index: this.$props.index
      // })
    },
    deleteRow() {
      this.$store.commit('contacts-table/deleteRow', {
        index: this.$props.index,
      })
    },
  },
}
</script>
