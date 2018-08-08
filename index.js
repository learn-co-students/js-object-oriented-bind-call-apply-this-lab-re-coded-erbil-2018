function justInvoke(fn){}

function setThisWithCall(fn, thisValue, arg){}
function justInvoke(fn) {
  console.log(`my name is ${this.name}, hi!`);
}
 
let sally = {name: 'sally'}
 
greet.apply(sally)
// my name is sally, hi!
 
greet.call(sally)