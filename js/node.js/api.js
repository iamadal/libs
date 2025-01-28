function display(result){
    console.log(result)
}

function main(a,b, fnCallBack /*This is a placement for passing argument as function*/) {
    const sum = a+b
    fnCallBack(sum) 
}

main(5,5,display)  // Callback function called without ()

