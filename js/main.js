persons = [
  {
    id: 325326,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041
  },
  {
    id: 325326,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041
  },
  {
    id: 325330,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041
  },
  {
    id: 325334,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "male",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012
  }
]
function getFullname(array){
  var name = prompt("Enter name");
  array.forEach(element => {
    if(element.firstname === name){
      console.log(element.firstname, element.lastname)
    }
    else{
      console.log("Tapilmadi");
    }
  });
}
getFullname(persons);

// function getFullname(array) {
//   var name = prompt("Enter name");
//   var person = array.find(element => element.firstname === name);
//   if (person) {
//     console.log(person.firstname, person.lastname);
//   } else {
//     console.log("Tapilmadi");
//   }
// }
// getFullname(persons);






// function list(person){
// person.forEach(element => {

//   console.log(element.firstname);
//   console.log(element.lastname);
// });
// }
// list(persons) 


// .forEach(element =>{
//   console.log(element.firstname);
//   console.log(element.lastname);
// });

