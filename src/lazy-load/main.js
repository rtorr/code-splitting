define([
  'b',
  'c'
], function(a, c) {
  console.log('main loaded');
  console.log(c.test());
  require(['a'], function(a) {});
});