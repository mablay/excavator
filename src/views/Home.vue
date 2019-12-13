<template>
  <div class="single-frame">
    <h1>Excavate Image</h1>
    <b-container fluid>
      <b-row>
        <b-col col cols="8">
          <Canvas :width="width.toString()" :height="height.toString()">
            <DecodedImage
              :width="width"
              :height="height"
              :colorModel="colorModel"
              :offset="offset"
              :rowPadding="rowPadding"
              :interleaveCols="interleaveCols"
              :interleaveRows="interleaveRows"
            />
          </Canvas>
        </b-col>
        <b-col cols="4" class="params">
          <b-row>
            <b-col cols>
              <!-- offset -->
              <b-form-group
                :description="`[0 .. ${bufferSize}]`"
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
            <b-col cols>
              <!-- rowPadding -->
              <b-form-group
                description="crop right"
                label="Row Padding"
                label-for="input-row-padding">
                <b-form-input
                  id="input-row-padding"
                  v-model.number="rowPadding"
                  type="number"
                  trim
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols>
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
            </b-col>
            <b-col cols>
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
            </b-col>
          </b-row>

          <!-- Color Model -->
          <b-form-group
            description="pixel channel encoding"
            label="Color model"
            label-for="input-color-model">
            <b-form-select
              id="input-color-model"
              v-model="colorModel"
              :options="colorModelOptions"
            />
          </b-form-group>

          <b-row>
            <b-col cols>
              <!-- interleaveCols -->
              <b-form-group
                description="Interleave columns"
                label="Skip bytes"
                label-for="input-interleave-cols">
                <b-form-input
                  id="input-interleave-cols"
                  v-model.number="interleaveCols"
                  type="number"
                  trim
                />
              </b-form-group>
            </b-col>
            <b-col cols>
              <!-- interleaveRows -->
              <b-form-group
                description="Interleave rows"
                label="Skip rows"
                label-for="input-interleave-rows">
                <b-form-input
                  id="input-interleave-rows"
                  v-model.number="interleaveRows"
                  type="number"
                  trim
                />
              </b-form-group>
            </b-col>
          </b-row>

        </b-col>
      </b-row>

      <!-- sliders -->
      <div>
        <label>Width</label>
        <b-form-input
          v-model.number="width"
          type="range"
          min="1"
          max="1200" />
      </div>
      <div>
        <label>Offset</label>
        <b-form-input
          v-model.number="offset"
          type="range"
          min="0"
          :max="bufferSize" />
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
      offset: 0,
      rowPadding: 0,
      colorModel: 'rgb',
      colorModelOptions: [
        { value: 'rgba', text: 'RGBA (8bit each channel)' },
        { value: 'rgb', text: 'RGB (8bit each channel)' },
        { value: 'grey', text: 'Grey (8bit)' }
      ],
      interleaveCols: 0,
      interleaveRows: 0
    }
  },
  computed: {
    bufferSize () {
      if (this.$store.state.file) {
        return this.$store.state.file.byteLength
      }
      return 0
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

.single-frame .params input{
  text-align: right;
}
</style>
