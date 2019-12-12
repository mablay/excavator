<template>
  <div id="nav">
    <b-navbar tpye="dark" variant="dark">
      <!-- Left aligned nav items -->
      <b-navbar-nav>
        <b-nav-item href="#">
          <router-link to="/">Single frame</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link to="/sequence">Sequence</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-text v-if="file">{{file.name}} bytes </b-nav-text>
        <b-nav-form>
          <FileReader @load="setFile" />
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import FileReader from '@/components/FileReader.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'Nav',
  components: { FileReader },
  data () {
    return { file: null }
  },
  methods: {
    ...mapMutations(['setFile'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
nav {
  width: 100%;
}
#nav .navbar-light .navbar-text {
  color: #88acff;
  padding-right: 20px;
}
</style>
