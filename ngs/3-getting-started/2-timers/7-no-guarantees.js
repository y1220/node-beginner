setTimeout(
  () => console.log('Hello after 0.5 seconds. MAYBE!'),
  500,
);

// bad example
for (let i = 0; i < 1e10; i++) {
  // Block Node Synchronously
}
