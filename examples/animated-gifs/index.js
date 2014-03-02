
var gameboy = require('../..');
var Canvas = require('canvas');
var GIFEncoder = require('gifencoder');

module.exports = encode;

function encode(rom, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = null;
  }

  opts = opts || {};
  var width = opts.width || 160;
  var height = opts.height || 144;
  var frames = opts.frames || 300;
  var canvas = new Canvas(width, height);
  var ctx = canvas.getContext('2d');
  var gb = gameboy(canvas, rom, { drawEvents: true });
  gb.stopEmulator = 1;
  gb.start();

  var gif = new GIFEncoder(width, height);
  gif.start();
  gif.setRepeat(0);
  gif.setDelay(opts.loop || 8);

  var int = setInterval(function(){
    gb.run();
  }, opts.loop || 8);

  gb.on('draw', function(){
    gif.addFrame(ctx);
    process.stdout.write('.');
    if (!--frames) {
      gif.finish();
      console.log('… puff!');
      clearInterval(int);
      fn && fn(null);
    }
  });

  return gif;
}
