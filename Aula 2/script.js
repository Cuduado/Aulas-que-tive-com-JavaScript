console.log("Eu sou o Batman!")

var isEnabled = true;
var teste = "false";

console.log(isEnabled)
console.log(teste)

var names = ["Vergil", "Dante", "Nero"]
console.log(names)
console.log(names[3])

names.push("Lady")
console.log(names.length)

var teams = new Array ("Sparda");
console.log (teams)

function testName(name){
  if(name.length > 10){
      return "Nome grande"
  } else{
      return "Nome pequeno"
  }
}

function isEqual(name){
    if(name === "Vergil"){
    return "I AM THE STORM THAT IS APPROACHING!!!"
}   
    else if (name === "Dante"){
    return "You cannot kill me! I am Omega! You cannot kill me! I am Subhuman!!!"
}
    else{
    return "Not is the Son of Sparda..."
}
}

console.log(testName("Nelo Angelo"))
console.log(isEqual("Vergil"))