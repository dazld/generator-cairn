let a = {
    b: 123,
    c: 213
}

console.log({
    ...a,
    thing: process.env.NODE_ENV
});
