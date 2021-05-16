const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);

// setImmediate

// will not print anything and just exit
clearTimeout(timerId);

// clearInterval
// clearImmediate