
// console.log( Math.random() );
// console.log( Math.random() );
// console.log( Math.random() );
// console.log( Math.random() );
// console.log( Math.random() );

// [0-10)
// console.log( Math.random()*10 );
// console.log( Math.random()*10 );
// console.log( Math.random()*10 );
// console.log( Math.random()*10 );
// console.log( Math.random()*10 );

// [0-100)
// console.log( Math.random()*100 );
// console.log( Math.random()*100 );
// console.log( Math.random()*100 );
// console.log( Math.random()*100 );
// console.log( Math.random()*100 );


// range = max-min

// [3-96)

// Math.random()*93 // [ 0-93 ) + 3 = > [3 , 96)

// [14 , 67)
// multiplication Factor = 67-14 = 53
// console.log( (Math.random()*53 + 14) ); // [0,53) + 14 => [0+14,53+14) => [14,67)



// console.log( Math.floor( (Math.random()*53 + 14) )  );


// 6 digit OTP => [100000 , 999999]
// mf = 999999-100000 + 1 = 900000

console.log(Math.floor( (Math.random()*900000 ) + 100000));
