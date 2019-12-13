# excavator

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Decoder

### Source
* offset // file offset
* width // frame width
* height // frame height
* colorModel // RGB, G, RGGB might be refined for expert mode later on
* trimRight // non pixel bytes at the end of a line (part of width)
* frameGap // non pixel bytes at end of frame to the next frame
* interleaveRows // ignore n rows for every row read (only applied to pixel bytes)
* interleaveCols // ignore n bytes for every byte read (only applied to pixel bytes)
