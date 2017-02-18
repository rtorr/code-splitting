import './b';
import { test } from './c';
console.log('main loaded');

console.log(test());

setTimeout(
  _ => {
    import('./a').then(function() {}).catch(function(err) {});
  },
  1000
);
