requirejs.config({
  deps: ['main'],
  paths: {
    'jquery': 'lib/jquery/dist/jquery',
    'bitcore': 'lib/bitcore/browser/bundle'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});
