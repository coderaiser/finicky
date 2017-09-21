'use strict';

const test = require('tape');
const finicky = require('..');

test('arguments: no', (t) => {
    t.throws(finicky, /selector should be string!/, 'should throw when no path');
    t.end();
});

test('arguments: no obj', (t) => {
    const fn = () => finicky('hello');
    
    t.throws(fn, /obj should be object!/, 'should throw when no obj');
    t.end();
});

test('result: remove value from object', (t) => {
    const obj = {
        hello: {
            world: 'something'
        }
    };
    
    const actual = finicky('hello.world', obj);
    const expected = {
        hello: {}
    };
    
    t.deepEqual(actual, expected, 'should remove property from object');
    t.end();
});

test('result: remove value from object: copy', (t) => {
    const obj = {
        hello: {
            world: 'something'
        }
    };
    
    const actual = finicky('hello.world', obj);
    const expected = {
        hello: {}
    };
    
    t.notEqual(actual, expected, 'should not modify original object');
    t.end();
});

test('result: missing value from empty object', (t) => {
    const actual = finicky('hello.world', {});
    
    t.deepEqual(actual, {}, 'should return empty object');
    t.end();
});

test('result: missing value from object', (t) => {
    const obj = {
        some: {
            value: 'hi'
        }
    };
    const actual = finicky('hello.world', obj);
    
    t.deepEqual(actual, obj, 'should return same object');
    t.end();
});

test('result: missing value from object: copy', (t) => {
    const obj = {
        some: {
            value: 'hi'
        }
    };
    const actual = finicky('hello.world', obj);
    
    t.notEqual(actual, obj, 'should return copy of object');
    t.end();
});

test('result: value is an object', (t) => {
    const obj = {
        hello: {}
    };
    
    const actual = finicky('hello', obj);
    
    t.deepEqual(actual, {}, 'should return value from object');
    t.end();
});

test('divider', (t) => {
    const obj = {
        hello: {
            world: 'something'
        }
    };
    
    const expected = {
        hello: {
        }
    };
    
    const actual = finicky('hello-world', '-', obj);
    
    t.deepEqual(actual, expected, 'should return value from object');
    t.end();
});

test('finicky: name with "_"', (t) => {
    const obj = {
        hello: {
            world_min: 'something'
        }
    };
    
    const actual = finicky('hello_world_min', '_', obj);
    const expected = {
        hello: {
        }
    };
    
    t.deepEqual(actual, expected, 'should delete property from object');
    t.end();
});

test('finicky: name with "_": similar', (t) => {
    const obj = {
        hello: {
            world: 'hello',
            world_min: 'something'
        }
    };
    
    const actual = finicky('hello_world_min', '_', obj);
    const expected = {
        hello: {
            world: 'hello',
        }
    };
    
    t.deepEqual(actual, expected, 'should remove property');
    t.end();
});

