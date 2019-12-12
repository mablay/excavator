<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'home',
  components: { Nav }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
// @import 'node_modules/bootstrap/scss/bootstrap';
// @import 'node_modules/bootstrap-vue/src/index.scss';

#app {
}

#nav {
}
</style>
