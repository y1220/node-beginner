const rocks = who => {
  console.log(who + ' rocks');
};

//(func, delay, arg1, arg2, arg3, ...)
setTimeout(rocks, 2 * 1000, 'Pluralsight');
