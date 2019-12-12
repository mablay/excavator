<script>
// canvas element, rendering to canvas context

export default {
  name: 'DecodedImage',
  // Gets us the provider property from the parent <my-canvas> component.
  inject: ['provider'],
  props: {
    width: Number,
    height: Number,
    depth: Number,
    offset: Number
  },
  computed: {
    buffer () {
      console.log('[DecodedImage] computed.buffer', this.$store.state.file)
      return this.$store.state.file
    }
  },
  // eslint-disable-next-line vue/require-render-return
  render () {
    // Since the parent canvas has to mount first, it's *possible* that the context may not be
    // injected by the time this render function runs the first time.
    const ctx = this.provider.context
    if (!ctx) return
    const { offset, width, height, buffer } = this
    console.log('[DecodedImage] render @', width, 'x', height)
    if (!buffer) return
    // const pixelInBuffer = this.buffer.byteLength / depth
    // const pixels = new Uint8ClampedArray(this.buffer)
    // const pixelCount = Math.min(width * height, pixelInBuffer)
    const imgData = ctx.createImageData(width, height)
    const rgba = imgData.data
    let t = offset
    for (let i = 0; i < rgba.length; i += 4) {
      rgba[i] = buffer[t]
      rgba[i + 1] = buffer[t + 1]
      rgba[i + 2] = buffer[t + 2]
      rgba[i + 3] = 255 // alpha
      t = t + 3
    }
    ctx.putImageData(imgData, 0, 0)
  }
}
</script>
