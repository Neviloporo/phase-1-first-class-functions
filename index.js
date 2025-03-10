 function receivesAFunction(callback) {
    callback();

 }

 function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Hello from named function!")
    }
}

 function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hello from anonymous function!")
    }
 }