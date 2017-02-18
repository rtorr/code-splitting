define([
  'b',
], function(b) {
  console.log('c loaded');
  return {
    test() {
      return 'test from c';
    }
  }
});