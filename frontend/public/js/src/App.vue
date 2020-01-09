<template>
  <div class="app-rapper">
    <h2>{{message}}</h2>
  </div>
</template>

<style scoped>
  h2 {
    font-size: 100px;
  }
</style>

<script>
  export default {
    data: () => {
      return {
        message: 'it works'
      }
    }
  }
</script>