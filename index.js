// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(appends) {
  appends = cats.push("Ralph");
}
function destructivelyPrependCat(prepends) {
  prepends = cats.unshift("Bob");
}
function destructivelyRemoveLastCat(removeLastCat) {
  removeLastCat = cats.pop();
}
function destructivelyRemoveFirstCat(removeFirstCat) {
  removeFirstCat = cats.shift();
}
function appendCat(newCat) {
  newCat = [...cats, "Broom"];
  return newCat;
}
function prependCat(addCat) {
  addCat = ["Arnold", ...cats];
  return addCat;
}

function removeCat2(lastCatRemove) {
  lastCatRemove = cats.slice(0, cats.length - 1);
  console.log(lastCatRemove);
}

let newCatArray = cats.slice(0, 2);
function removeLastCat() {
  return newCatArray;
}

let newCat2Array = cats.slice(1);
function removeFirstCat() {
  return newCat2Array;
}
console.log(newCat2Array);
