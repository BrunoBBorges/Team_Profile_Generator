const employee = require("../lib/employee");

test("can instantiate employee instance", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object");
});


test("can set name", () => {
    const name = "george";
    const e = new employee(name);
    expect(e.name).toBe(name);
});

test("can return getname()", () => {
    const testval = "george"; 
    const e = new employee(testval);
    expect(e.getname()).toBe(testval);
});

test("can set id", () => {
    const testval = 100;
    const e = new employee("Foo", testval);
    expect(e.id).toBe(testval);
});

test("can set email", () => {
    const testval = "test@gmail.com";
    const e = new employee("John", 1, testval);
    expect(e.getemail()).toBe(testval);
});

test("can get email via getemail()", () => {
    const testval = "test@gmail.com";
    const e = new employee("John", 1, testval);
    expect(e.getemail()).toBe(testval);
});

test("can get id via getid()", () => {
    const testval = "test@gmail.com";
    const e = new employee("John", testval);
    expect(e.getid()).toBe(testval);
});

test("getrole() should return \"Employee\"", () => {
    const testval = "employee";
    const e = new Employee("John", 1, "test@gmail.com");
    expect(e.getrole()).toBe(testval);
});
