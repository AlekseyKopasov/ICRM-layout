<template>
  <v-app>
    <div class="empty-layout">
      <nuxt />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Empty',
}
</script>

<style lang="scss" scoped>
.empty-layout {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 6, 55, 0.6);
}

.theme--dark.v-input {
  color: red;
}
</style>
