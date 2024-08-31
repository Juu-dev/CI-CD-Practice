// index.test.js
const sayHello = require('./index');

test('says Hello World', () => {
    expect(sayHello()).toBe("Hello World!");
});
