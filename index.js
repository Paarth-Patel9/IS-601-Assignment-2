var vowels = 0
var cons = 0
var input = prompt("Enter a string:")
input = input.toLocaleLowerCase()

for(var i = 0; i < input.length; i++) {
    if(input[i] === 'a'|| input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u' || input[i] === 'a')
        vowels += 1
    if(input[i] === 'b' || input[i] === 'c' || input[i] === 'd' || input[i] === 'f' || input[i] === 'g' || input[i] === 'j' || input[i] === 'k' || input[i] === 'l' 
    || input[i] === 'm' || input[i] === 'n' || input[i] === 'p' || input[i] === 'q' || input[i] === 's' || input[i] === 't' || input[i] === 'v'
    || input[i] === 'x' || input[i] === 'z' || input[i] === 'h' || input[i] === 'r' || input[i] === 'w' || input[i] === 'y')
        cons += 1
}

document.getElementById("vc").innerHTML = "The number of vowels: " + vowels + ". \nThe number of consonants: " + cons + ".";
 

input = prompt("Enter a series of numbers:")
input = input.trim()
var pal = palindrome(input)

if(pal == 0)
    document.getElementById("p").innerHTML = "Not a palindrome."
else
    document.getElementById("p").innerHTML = "A palindrome."


var total = prompt("What is the subtotal of the bill?")
while(total < 0)
    total = prompt("Re-enter non-negative subtotal of the bill?") 

var tip = prompt("Percentage tip given to waiters (0 - 100)?")
while(tip < 0)
    tip = prompt("Re-enter non-negative tip given to waiters (0 - 100)?")

total = (1 + (tip / 100)) * (total)
total = Math.round(total * 10 ** 2) / 10 ** 2
document.getElementById("b").innerHTML = "Total Bill: $" + total


function palindrome(input) {
    var palindrome = 1
    var j = input.length - 1
    for(i = 0; i < input.length && j >= 0; i++,j--) {
        if(input[i] !== input[j]) {
            palindrome = 0
            break
        }
    }
    return palindrome
}