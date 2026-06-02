const stringFunction = require('./stringUtils.js');

console.log(`\n Capitalize Function Test:`);
console.log("This should be capitalized: ", stringFunction.capitalize("apple"));
console.log("This should fail to capitalize: ", stringFunction.capitalize(undefined));

console.log(`\n Reverse Function Test:`);
console.log("This should be reversed: ", stringFunction.reverse("Great Expections")) ; 
console.log("This should fail to reverse: ", stringFunction.reverse(""));

console.log(`\n Reverse Function Test:`);
console.log("This should result to true: ", stringFunction.contains("Alabama", "bam"));
console.log("This should be invalid: ", stringFunction.contains(NaN));