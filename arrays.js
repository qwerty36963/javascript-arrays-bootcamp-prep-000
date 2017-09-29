var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var foo = 'foo'
function addElementToBeginningOfArray(chocolateBars, foo){
  return [foo, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
chocolateBars.unshift(foo);
return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, foo){
  return [chocolateBars, ...foo];
}
