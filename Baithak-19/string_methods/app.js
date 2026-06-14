


// let str = "SAmarth Vohra";
// console.log(str);


// console.log(str[0]);
// console.log(str[1]);
// console.log(str[7]);
// console.log(str[10]);

// ---------------------------


// let str = "SAmarth Vohra";
// console.log(str);

// //property - length
// console.log( str.length ); //property
// console.log( str.length() ); //method 

// ---------------------------

// METHODS
// toUpperCase()

// let str = "SAmarth VoHra";
// console.log( str.toUpperCase() ); //non-destructive
// console.log( str.toLowerCase() ); //non-destructive

// console.log(str , "original"); //NO change 

// ---------------------------

// let str = "     SAmarth VoHra      "; //24

// console.log(  str.length ); //24

// console.log( str );

// let newStr =  str.trim();
// console.log( newStr.length );
// or
// console.log( str.trim().length ); //13

// console.log( str.trimStart().length ); //19
// console.log( str.trimEnd().length ); //18

// ---------------------------
// let str = "Samarth VoHra"; //13

// // console.log( str.split(" ") ); //arrays
// console.log( str.split("a") ); //arrays

// ---------------------------
// concat
// let str1 = "Code"
// let str2 = "Baithak"
// let str3 = " "

// console.log( str1.concat(str3).concat(str2) );
// // console.log( str1 + str3 + str2 );


// ---------------------------
// includes
// let str = "pizza garlic bread hotel"

// // let findd = 'pizz'
// let findd = 'pizzas'

// console.log( str.includes(findd) ); //boolean value return

// ---------------------------
// indexOf
// let str = "pizza garlic bread hotel"

// // let findd = 'pizz'
// let findd = 'garlic'

// console.log( str.indexOf(findd) ); //0

// ---------------------------
// charAt ==> HW
// ---------------------------
// replace , replaceAll

// let str = "hello from samarth vohra code baithak"

// console.log( str.replaceAll('a' , '@') );

// console.log( str.replace('a' , '@') );


// ---------------------------
// padStart , padEnd
// XXXXXXXXXX2323 

let fourDigit = "1234";

console.log(fourDigit.padStart(16, "X") );
console.log(fourDigit.padStart(15, "*") );

console.log(fourDigit.padEnd(16, "X") );
console.log(fourDigit.padEnd(15, "*") );



