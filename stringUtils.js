//Task.2 Practicing String Utilities
// Create the stringUtils.js Module:
// Define and export the following functions:
// 1. capitalize(str): Converts the first letter of a string to uppercase.
// 2. reverse(str): Reverses the characters in a string.
// 3. contains(str, substr): Checks if a substring exists within astring and returns true or false.

//Task 2.1

function capitalize(str){
    if (str === "" || typeof str !== "string"){
        return "[INVALID INPUT]";
    }
    else {
        let firstLetter = str.slice(0,1).toUpperCase();
        firstLetter += str.slice(-(str.length - 1));
        return firstLetter;
    }

}

//Task 2.2

function reverse(str){
    
    if (str === "" || typeof str !== "string"){
        return "[INVALID INPUT]";
    }
    else if (str.length <= 1) { 
        return str;
    }
    else {
        return str.slice(-1) + reverse(str.slice(0, -1)); 
    }
}

//Task 2.3

function contains (str, substr) {
    if (str === "" || typeof str !== "string" || substr === "" || typeof substr !== "string"){
        return "[INVALID INPUT]";
    }
    else {
        return str.includes(substr);

    }

}
module.exports = {capitalize, reverse, contains};