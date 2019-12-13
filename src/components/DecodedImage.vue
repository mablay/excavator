<script>
// canvas element, rendering to canvas context
import * as decoder from '@/decoder/decoder.js'

export default {
  name: 'DecodedImage',
  // Gets us the provider property from the parent <my-canvas> component.
  inject: ['provider'],
  props: {
    offset: { type: Number, default: 0 },
    rowPadding: { type: Number, default: 0 },
    width: { type: Number, default: 100 },
    height: { type: Number, default: 100 },
    colorModel: { type: String, default: 'rgb' },
    interleaveCols: { type: Number, default: 0 },
    interleaveRows: { type: Number, default: 0 }
  },
  computed: {
    buffer () {
      // console.log('[DecodedImage] computed.buffer', this.$store.state.file)
      return this.$store.state.file
    }
  },
  // eslint-disable-next-line vue/require-render-return
  render () {
    // Since the parent canvas has to mount first, it's *possible* that the context may not be
    // injected by the time this render function runs the first time.
    const ctx = this.provider.context
    if (!ctx) return
    const { buffer, offset, rowPadding, width, height, colorModel, interleaveCols, interleaveRows } = this
    const options = { offset, rowPadding, width, height, colorModel, interleaveCols, interleaveRows }
    // console.log(`render ${width}x${height}, color model: ${colorModel}`)
    if (!buffer) return
    const imgData = ctx.createImageData(width, height)
    decoder[colorModel](buffer, imgData, options)
    ctx.putImageData(imgData, 0, 0)
  }
}
</script>
