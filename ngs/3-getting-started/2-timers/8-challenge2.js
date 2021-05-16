let cnt = 0;
const intervalId = setInterval(() => {
    // Print "Hello World"
    console.log('Hello World');
    // Every second
    cnt += 1;

    // And stop after 5 times
    if (cnt === 5){
        // After 5 times. Print "Done" and let Node exit.
        console.log('Done');
        clearInterval(intervalId);
    }
}, 1000);
// 1000 millisecond






