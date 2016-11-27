var c = 0;

function printIt() {
    console.log(c);
}

/*
1. 正常执行返回1
function plus() {
    c += 1;
}*/

//2. 延时执行返回0，printIt
/*function plus() {
    setTimeout(function() {
        c += 1;
    }, 1000);
}*/

//3. 传入函数，时延结束后调用。
function plus(callback) {
	setTimeout(function() {
        c += 1;
        callback();
    }, 1000);
    
}

// plus();
plus(printIt);
printIt();
