//write your code here
// Don't need to call take() function 
function take(input){
input=input.trim().split(`\n`)
const [a,b]=input[0].split(" ").map(Number)
console.log(a,b)
}take("1 46")