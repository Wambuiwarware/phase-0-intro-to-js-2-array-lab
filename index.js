let cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name){
  cats.push('Ralph')
  return cats
}
function destructivelyPrependCat(name){
  cats.unshift('Bob')
  return cats
}
function destructivelyRemoveLastCat(){
  cats.pop('Ralph')
  return cats
}
function  destructivelyRemoveFirstCat(){
  cats.shift('Bob')
  return cats
}
function  destructivelyRemoveFirstCat(){
  cats.shift('Milo')
  return cats
}
function appendCat(name){
  var name1 = [...cats, "Broom"]
  return name1
}
function prependCat(name){
  var name1 = [...cats, ]
  return name1
}
function prependCat(name){
  var name_2=[name, ...cats];
  return name_2
  }
  
  function removeLastCat(){
  var MiniFinalArrayOfPets= cats.slice(0,cats.length-1);
  return MiniFinalArrayOfPets;
  }
  
  function removeFirstCat(){
  var NewArrayOfCats= cats.slice(1)
  return NewArrayOfCats
  }

