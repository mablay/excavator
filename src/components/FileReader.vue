<template>
  <b-form-file
    @change="loadDataFromFile"
    placeholder="Any file"
    drop-placeholder="Drop here...">
    Open
  </b-form-file>
</template>

<script>
// inspired by https://alligator.io/vuejs/file-reader-component/
export default {
  name: 'FileReader',
  methods: {
    loadDataFromFile (ev) {
      const file = ev.target.files[0]
      const reader = new FileReader()
      reader.onload = e => this.$emit('load', e.target.result)
      reader.readAsArrayBuffer(file)
    }
  }
}
</script>

<style lang="scss">
</style>
