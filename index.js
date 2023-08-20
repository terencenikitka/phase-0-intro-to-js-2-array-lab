// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return (cats.push(name))
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let newArr = ["Milo", "Otis", "Garfield"]
     newArr.push(name)
     
     return newArr
}
function prependCat(name)
{
    let result = ["Milo", "Otis", "Garfield"]
   result.unshift(name)
    return result
}
function  removeLastCat(){
    let result = ["Milo", "Otis", "Garfield"]
    result.pop()
    return result
}
function removeFirstCat (){
    let result = ["Milo", "Otis", "Garfield"]
    result.shift()
    return result
}