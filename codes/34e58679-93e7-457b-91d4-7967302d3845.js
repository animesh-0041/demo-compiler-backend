//write your code here
// Don't need to call take() function 
function take(input){
input=input.trim().split(`\n`)
    const tc=+input[0].trim();
    for(let i=0,line=1;i<tc;i++){
        let n=+input[line++].trim()
        let ar1=input[line++].trim().split(" ").map(Number)
        let ar2=input[line++].trim().split(" ").map(Number)
        fun(n,ar1,ar2)
    }
}

function fun(n,ar1,ar2){
    console.log(n,ar1,ar2)
}take("2\n2\n3 5\n3 6\n3\n6 8 9\n6 10 12\n")