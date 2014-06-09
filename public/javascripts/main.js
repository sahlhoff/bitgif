define(['jquery', 'bitcore', 'qrcode'],
  function ($, bitcore, qrcode) {
  'use strict';

  var bitcore = require('bitcore');
  var Key = bitcore.Key;
  var Address = bitcore.Address;
  var re = /[0-9]{6}$/;
  var a,k,m;

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

  var address = generateAddress();

  console.log(address);

  console.log('Address: ' + address[0].toString());
  console.log('Private Key: ' + address[1].private.toString('hex'));


});