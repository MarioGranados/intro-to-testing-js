// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

//sayHello test
describe('sayHello', function () {
    it('should be defined', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should not return the undefined ', function () {
        expect(sayHello()).not.toBe('undefined');
    });
    it('should return hello Jane', function () {
        expect(sayHello(' Jane')).toEqual('hello Jane');
    });
    it('should return "hello Alex"', function () {
        expect(sayHello(' Alex')).toEqual('hello Alex');
    });
});


//unit test for double

describe('double', function () {
    it('should return a number when used', function () {
        expect(typeof double()).toBe('number');
    });
    it('should return a function', function () {
        expect(typeof double).toBe('function');
    });
    it('should return 10', function () {
        expect(double(5)).toEqual(10);
    });
});