

// let obj = {
//     // properties = key : value
//     age: 12,
//     email: "sam@gmail.com"
// }

// obj.age = 34;
// console.log(obj);

// ---------------------------

// var id1 = Symbol("id")
// var id2 = Symbol("id")
// console.log(id1);
// console.log(id2);

// console.log( id1 === id2);

// ---------------------------

var mailId = Symbol("email")

let person = {
    name: "SAMARTH VOHRA",
    age: 11,
    [mailId]: "sam@gmail.com"
}

// person.name = "Maverick Vohra"
// console.log(person.name);
// person.age = 4
// console.log(person.age);
// console.log(person);

// person.mailId = "vohra@gmail.com";
// console.log(person[mailId]); 
// console.log(person);

// console.log(person.mailId); //undefined

// ---------------------------
console.log( Object.keys(person) );


