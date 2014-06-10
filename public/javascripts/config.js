requirejs.config({
  deps: ['main'],
  paths: {
    'jquery': 'lib/jquery/dist/jquery',
    'bitcore': 'lib/bitcore/browser/bundle',
    'qrcode': 'lib/qrcode/qrcode',
    'Animated_GIF': 'lib/Animated_GIF/dist/Animated_GIF.min'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'qrcode': {
      exports: 'qrcode'
    }
  }
});
