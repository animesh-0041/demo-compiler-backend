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
    let a=0,b=0
    for(let i=0;i<n;i++){
        a+=ar1[i]
    }
      for(let i=0;i<2;i++){
        b+=ar2[i]
    }

    if(a<=b){
        console.log("YES")
    }
    else{
        console.log("NO")
    }
}take("2\n3\n1 2 3\n4 5 6\n2\n4 5\n1 2")