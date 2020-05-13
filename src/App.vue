<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
#app{width: 1200px;margin: 0 auto;}
</style>
