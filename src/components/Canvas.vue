<template>
  <div class="canvas-wrapper">
    <canvas ref="canvas" :width="width" :height="height"></canvas>
    <slot></slot>
  </div>
</template>

<script>
// inspired by https://alligator.io/vuejs/vue-html5-canvas/
export default {
  name: 'Canvas',
  props: {
    width: String,
    height: String
  },
  data () {
    return {
      // By creating the provider in the data property, it becomes reactive,
      // so child components will update when `context` changes.
      provider: {
        // This is the CanvasRenderingContext that children will draw to.
        context: null
      }
    }
  },
  // Allows any child component to `inject: ['provider']` and have access to it.
  provide () {
    return {
      provider: this.provider
    }
  },
  computed: {
    buffer () {
      if (!this.$store.state.file) return null
      return this.$store.state.file
    }
  },
  mounted () {
    // We can't access the rendering context until the canvas is mounted to the DOM.
    // Once we have it, provide it to all child components.
    this.provider.context = this.$refs['canvas'].getContext('2d')
    // Resize the canvas to fit its parent's width.
    // Normally you'd use a more flexible resize system.
    // this.$refs['canvas'].width = this.$refs['canvas'].parentElement.clientWidth
    // console.log('canvas width', this.$refs['canvas'].parentElement.clientWidth)
    // this.$refs['canvas'].height = this.$refs['canvas'].parentElement.clientHeight
  },
  methods: {
    updateWidth ({ target }) {
      const w = target.value
      const h = this.file.byteLength / w
      this.label.textContent = target.value + ' | Residual: ' + (h % 1)
      // if (h % 1 === 0) {
      console.log('updateWidth', target.value)
      this.state.width = w
      this.updateCanvas()
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
canvas {
  background-color: lightgrey;
  border: 1px solid grey;
  // width: 100%;
}
</style>
