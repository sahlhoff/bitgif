define(['jquery', 'bitcore', 'qrcode', 'Animated_GIF'],
  function ($, bitcore, qrcode, Animated_GIF) {
  'use strict';

  var keyImage;
  var addressImage;
  var bitcore = require('bitcore');
  var Key = bitcore.Key;
  var Address = bitcore.Address;
  var animatedImage = document.createElement('img');
  var addressObject = document.createElement('div');
  var keyObject = document.createElement('div');
  var interval = 0.1;


  var ag = new Animated_GIF({ 
    workerPath: 'javascripts/lib/animated_GIF/dist/Animated_GIF.worker.min.js' 
  }); 
  ag.setSize(320, 340);


  var generateAddress = function (k){
    var a;
    a = Address.fromKey(k);
    return a;
  }

  var generateKey = function (){
    var k;
    k = Key.generateSync();
    return k;
  }

  var create_qrcode = function (text, typeNumber, errorCorrectLevel, table){
    var qr = qrcode(typeNumber || 6, errorCorrectLevel || 'M')
    qr.addData(text);
    qr.make();

    return qr.createImgTag();
  }

  // Generate key and address
  var key = generateKey();
  var address = generateAddress(key);

  // Create strings
  addressImage = create_qrcode(address.toString());
  keyImage = create_qrcode(key.private.toString('hex'));

  // Create Dom objects
  addressObject.innerHTML = addressImage;
  keyObject.innerHTML = keyImage;

  // Add images to frame
  ag.addFrame(addressObject.firstChild);
  ag.addFrame(keyObject.firstChild);

  // Generate gif
  ag.getBase64GIF(function(image) {
      animatedImage.src = image;
      document.body.appendChild(animatedImage);
  });


});