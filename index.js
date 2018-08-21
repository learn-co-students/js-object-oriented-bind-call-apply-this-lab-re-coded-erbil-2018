function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arguments){
  return fn.call(thisValue, arguments);
}

function setThisWithApply(fn, thisValue, ourArguments) {
  return fn.apply(thisValue, ourArguments);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}