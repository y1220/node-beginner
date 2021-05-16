const theOneFunc = delay => {
    console.log('Hello after ' + delay + ' seconds');
};


// (func, delay, arg1, arg2, arg3, ...)
// Hello after 4 seconds
setTimeout(theOneFunc, 4 * 1000, 4);

// Hello after 8 seconds
setTimeout(theOneFunc, 8 * 1000, 8);

// You can define only ONE function
