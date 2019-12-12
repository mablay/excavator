<template>
  <div class="home">
    <h1>Excavate Image</h1>
    <b-container fluid>
      <b-row>
        <b-col col cols="10">
          <Canvas>
            <DecodedImage
              :width="width"
              :height="height"
              :depth="depth"
              :offset="offset"
            />
          </Canvas>
        </b-col>
        <b-col cols="2">
          <!-- width -->
          <b-form-group
            description="Source image width"
            label="Width"
            label-for="input-width">
            <b-form-input
              id="input-width"
              v-model.number="width"
              type="number"
              trim
            />
          </b-form-group>

          <!-- height -->
          <b-form-group
            description="Source image height"
            label="Height"
            label-for="input-height">
            <b-form-input
              id="input-height"
              v-model.number="height"
              type="number"
              trim
            />
          </b-form-group>

          <!-- depth -->
          <b-form-group
            description="Source image depth"
            label="Depth"
            label-for="input-depth">
            <b-form-input
              id="input-depth"
              v-model.number="depth"
              type="number"
              trim
            />
          </b-form-group>

          <!-- offset -->
          <b-form-group
            description="Offset in file"
            label="Offset"
            label-for="input-offset">
            <b-form-input
              id="input-offset"
              v-model.number="offset"
              type="number"
              trim
            />
          </b-form-group>
        </b-col>
      </b-row>
      <div>
        <label>Width (range slider)</label>
        <b-form-input
          v-model.number="width"
          type="range"
          min="1"
          max="1200" />
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Canvas from '@/components/Canvas.vue'
import DecodedImage from '@/components/DecodedImage.vue'

export default {
  name: 'home',
  components: {
    Canvas,
    DecodedImage
  },
  data () {
    return {
      width: 100,
      height: 100,
      depth: 3,
      offset: 0
    }
  },
  computed: {
    pixels () { // this is the image arrayBuffer (large object!)
      if (this.$store.state.file) {
        return this.$store.state.file
      }
      return null // new ArrayBuffer(0)
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
// @import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
}

#nav {
}
</style>
