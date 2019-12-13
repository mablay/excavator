export function rgba (src, imgData, options) {
  // TODO: implement row padding
  const dst = imgData.data
  let t = options.offset
  for (let i = 0; i < dst.length; i += 4) {
    dst[i] = src[t]
    dst[i + 1] = src[t + 1]
    dst[i + 2] = src[t + 2]
    dst[i + 3] = 255 // alpha
    t = t + 4
  }
}

export function rgb (src, imgData, options) {
  // TODO: implement row padding
  const dst = imgData.data
  let t = options.offset
  for (let i = 0; i < dst.length; i += 4) {
    dst[i] = src[t]
    dst[i + 1] = src[t + 1]
    dst[i + 2] = src[t + 2]
    dst[i + 3] = 255 // alpha
    t = t + 3
  }
}

export function grey (src, imgData, options) {
  // TODO: implement row padding
  const dst = imgData.data
  let t = options.offset
  let itlCols = Math.max(0, options.interleaveCols)
  const length = Math.floor(dst.length)
  for (let i = 0; i < length; i += 4) {
    dst[i + 0] = src[t]
    dst[i + 1] = src[t]
    dst[i + 2] = src[t]
    dst[i + 3] = 255 // alpha
    t = t + 1 + itlCols
  }
}
