const cats = ["Milo", "Otis", "Garfield"]
//cats.push(`Ralph`);
function destructivelyAppendCat(name) {
    cats.push(`Ralph`)
}
function destructivelyPrependCat(name) {
    cats.unshift(`Bob`)
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(){
 return [...cats, "Broom"];
}
function prependCat() {
    return ["Arnold", ...cats];
}
function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return cats.slice(1);
}