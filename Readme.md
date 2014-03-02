
# gameboy

NPM module that exports the `GameBoyCore.js` file from
[grantgalitz/GameBoy-Online](https://github.com/grantgalitz/GameBoy-Online)

Changes:
- Converted into module.
- Avoids using globals.
- Cleaner interface for options tuning.
- Compatible with browsers and node.js.
- Removed js-based resizing in favor of browser's.
- Allow for ROM input as `Buffer` or `ArrayBuffer` instead of
  deprecated binary strings
- Linting.
- Removed unneeded dependencies.
- Main interface turned into an `Emitter`.
- Incorporated [debug](https://github.com/visionmedia/debug).
- Added server-side usage examples

## How to use

```js
var gb = require('gameboy');
gb(canvasElement, romData, opts);
```

### Options

- `bootRom` - boot with boot ROM first (`true`)
- `gbBootRom` - use gameboy boot ROM instead of gameboy color (`false`)
- `mbc1` - allow for MCB1 instead of ROM only (`false`)
- `prioritizeGb` - give priority to gameboy mode (`false`)
- `interval` - emulator loop interval (`6`)
- `canvas` - custom canvas constructor (`null`)
- `imageSmoothing` - smooth images when resizing (`true`)
- `drawEvents` - emit `draw` (`false`)
- `sound` - sound interface (`null`)
- `volume` - volume level (`1`)
- `audioBufferMin` - minimum span amount over x interpreter iterations (`10`)
- `audioBufferMax` - maximum span amount over x interpreter iterations (`20`)
- `colorizeGb` - colorize gameboy mode (`true`)
- `overrideMbc` - override MBC RAM disabling and always allow reading and
writing to the banks (`false`)
- `typedArrays` - use typed arrays (`true`)
- `channels` - user controlled channel enables (`[true,true,true,true]`)

### Events

- `draw` raised only if `drawEvents` is `true` whenever a draw to the
  canvas occurs
- `error` raised when emulation should be paused due to
  unexpected behavior

## License

GPL2 - Copyright (C) 2010 - 2012 Grant Galitz
