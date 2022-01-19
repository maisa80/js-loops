console.log('############## if-statements #############');

if (true) {
  console.log('Exekverar koden i blocket');
}

if (false) {
  console.log('Kommer aldrig att exekvera koden i blocket');
}

console.log('Hej!');
console.log('Hej!');
console.log('Hej!');
console.log('Hej!');
console.log('Hej!');


/*
Similar to an if-statement, 
while-loops use conditions and will execute the code as long as the condition is true

Important to keep changing the value of the condition, so that eventueally tha condition will be false,  
and the loop breaks.
OR else we will be stuck in an infinity-loop

while (condition) {
  // code block to be executed
}
*/

console.log('############## while-loop with decrement #############');

let counter = 5;
while (counter > 0) {
  console.log('Hej Hej');
  console.log(`Counter är ${counter}`);

  //Decrementing the counter with 1

  // All three ways does the same thing, decrement with 1
  // counter = counter - 1;
  // counter -= 1;
  counter--;
}


console.log('############## while-loop with increment #############');

counter = 1;
while (counter <= 5) {
  console.log('Hej Hej');
  console.log(`Counter är ${counter}`);

  //Increment the counter with 1
  
  // All three ways does the same thing, increment with 1
  // counter = counter + 1;
  // counter += 1;
  counter++;
}


/**
 * for (statement 1; statement 2; statement 3) {
 *      code block to be executed
 * }
 * 
 * Statement 1: 
 * is executed (one time) before the execution of the code block.
 * sets a variable before the loop starts (var i = 0).
 * 
 * Statement 2: 
 * defines the condition for executing the code block.
 * 
 * Statement 3: 
 * is executed (every time) after the code block has been executed.
 * increases a value each time the code block in the loop has been executed.
 */



/*
    If you know the loop count
    Then the for loop is more suiteable

    if you don't know the loop count
    Then the while loop is more suiteable
    Example:
        - Loop untill the user has guessed right, in a guesssing game
        - Loop as long as the password is wrong, in a login app
*/
console.log('############## while-loop in login verification #############');
// let userInput = prompt('Ange lösenord');
// let correctPassword = 12345;

// while (userInput != correctPassword) {
//   userInput = prompt('Fel lösenord. Försök igen');
// }
// alert('Korrekt lösenord');
// console.log('Du är nu inloggad');









console.log('############## for-loop with increment #############');
for (let i = 1; i <= 5; i++) {
  console.log('Hej Hej');
  console.log(`Lopp numret är ${i}`);
}




console.log('############## Break a loop #############');
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

console.log('############## Continue a loop #############');
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}


/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

Similar to an if-statement
- Use switch if you are checking only one condition, and need to alter a value depending on different states of that condition
- Use if-statements if need to only check one state of condition, OR when you need to check multiple conditions
*/

console.log('########## switch ###########');
let day = '';
let dayIndex = new Date().getDay(); // returns 0-6
let error = "All is good :)";
console.log(dayIndex);

switch(dayIndex) {
  case 0:   // may see it as the following ->  if (dayIndex == 0) { day = "Sunday"}
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    console.log('Invalid day')
}

if (day) {
  console.log(`Today is ${day}`);
}

