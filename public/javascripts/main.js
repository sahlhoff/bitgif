define(['jquery', 'bitcore'],
  function ($, bitcore) {
  'use strict';

  var bitcore = require('bitcore');
  var Key = bitcore.Key;
  var Address = bitcore.Address;
  var re = /[0-9]{6}$/;
  var a,k,m;

  while (true) {
    k = Key.generateSync();
    a = Address.fromKey(k);
    m = a.toString().match(re);
    if (m) break;
  }

  console.log('Address: '+a.toString());
  console.log('Private Key: '+k.private.toString('hex'));


});