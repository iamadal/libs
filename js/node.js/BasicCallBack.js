function display(result){
    console.log(result)
}

function main(a,b, fnCallBack /*This is a placement for passing argument as function*/) {
    const sum = a+b
    fnCallBack(sum) 
}

main(5,5,display)  // Callback function called without ()

/**
 * Call Stack
 * 01. main >> a = 5 , b = 5, fnCallBack = display >> calculate sum = 5+5 = 10
 * 02. fnCallBack = display so call the display function as callback
 * */