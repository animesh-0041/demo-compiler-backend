//write your code here
function take(input){
    input=input.trim().split("\n");
    const tc=+input[0].trim()
    for(let i=o,line=1;i<tc;i++){
        let [a,b]=input[line++].trim().split(" ").map(Number)
        fun(a,b)
    }
}
function fum(a,b){
    console.log(a,b)
}take(2\n1 2\n5 3)