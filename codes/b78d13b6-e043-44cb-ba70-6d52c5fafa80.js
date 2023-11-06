//write your code here
// Don't need to call take() function 
function take(input){
input=input.trim().split(`\n`)
const [a,b]=input[0].trim().split(" ").map(Number)
 if(a*b>50){
console.log("Enoug")
 }else{
    console.log("Go On")
 }
}take("6 9")