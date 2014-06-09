requirejs.config({
  deps: ['main'],
  paths: {
    'jquery': 'lib/jquery/dist/jquery',
    'bitcore': 'lib/bitcore/browser/bundle',
    'qrcode': 'lib/qrcode/qrcode'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});
