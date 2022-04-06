const names = ["Goku", "Gohan", "Goten", "Bardock", "Chi Chi", "Pan"];

console.log(names);

/*const personObj = {
  name: "Son Goku",
  age: 43,
  profession: "Lutador de artes marciais e agricultor",
  hobbies: ["Lutar", "Comer", "Treinar"],
};*/

const personObj = {
  age: 22,
  withBonus: true,
  hobbies: ["Lutar", "Comer", "Treinar"],
};

personJolyne = {
  ...personObj,
  name: "Jolyne",
  genre: "Female",
};

personGohan = {
  ...personObj,
  name: "Gohan",
  genre: "Male",
};

console.log(personJolyne);
console.log(personGohan);

/*const findName = names.find(function (name) {
  if (name === "Chi Chi") {
    return true;
  }
  return false;
}); */

/*const findName = names.findIndex((name) => name == "Videl");

if (findName > -1) {
  console.log("Está presente");
} else {
  console.log("Faltou");
}

console.log(findName);*/
