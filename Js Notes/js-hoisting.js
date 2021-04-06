// Hoisting of var vs let



var x = 7;


// undefined Vs not defined

/***************
 * When ever we create a variable and assign it.. js creates global execution and allocates the memory to all the variable even before code runs
 * it will create memeory and allocates undefined intially and after execution of the code it will assign the resceptive values
 * 
 * 
 * not defined --> if the variable is not created and still u try to use that variable then it will throw not defined 
 * 
 */


// undefined vs null

/***
 * Both null and undefined are not values
 * 
 * typeof null ==> object
 * typeof undefined ==> undefined
 * 
 * null === undefined    // false
 * null == undefined     // true
 * 
 * null === null  // true
 * !null // true
 * 
 * !!null  //  false
 * 
 * 1 + null // 1
 * 1  + undefined  // NaN
 * 
 * 
 */