const employee = require("../lib/employee");
const manager = require("../lib/manager");

test("can set office number", () => {
    const testval = 100;
    const e = new manager("john", 1, "john@john.com", 100);
    expect(e.officenumber).tobe(testval);
});

test("getrole() return value", () => {
    const testval = "manager";
    const e = new manager("john", 1, "john@john.com", 100);
    expect(e.getrole()).tobe(testval);
});

test("getoffice() return value", () => {
    const testval = 100;
    const e = new manager("john", 1, "john@john.com", testval);
    expect(e.getofficenumber()).tobe(testval);
});