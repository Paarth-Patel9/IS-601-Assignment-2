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