<template>
  <div id="app">
    <Nanjing />
  </div>
</template>

<script>
import Nanjing from '@/views/Nanjing.vue'

export default {
  name: 'app',
  components: {
    Nanjing
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
#app{width: 1200px;margin: 0 auto;}
</style>
