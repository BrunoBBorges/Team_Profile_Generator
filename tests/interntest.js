const intern = require("../lib/intern")

test("can set school val", () => {
    const testval = "uconn";
    const e = new intern("john", 1, "john@john.com", testval);
    expect(e.school).tobe(testval);
});

test("getrole() return value", () => {
    const testval = "intern";
    const e = new intern("john", 1, "john@john.com", "uconn");
    expect(e.getrole()).tobe(testval);
});

test("getschool() return value", () => {
    const testval = "uconn";
    const e = new intern("john", 1, "john@john.com", testval);
    expect(e.getschool()).tobe(testval);
});