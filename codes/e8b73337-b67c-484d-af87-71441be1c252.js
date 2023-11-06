//write your code here
function take(input){
    input=input.trim().split("\n");
    const tc=+input[0].trim()
    for(let i=0,line=1;i<tc;i++){
        let [a,b]=input[line++].trim().split(" ").map(Number)
        fun(a,b)
    }
}
function fun(a,b){
    console.log(a+b)
}take("3")