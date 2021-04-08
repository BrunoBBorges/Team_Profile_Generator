const engineer = require("../lib/engineer");


test("can set github account through constructor", () => {
    const testval = "githubvalue";
    const e = new engineer("john", 1, "john@john.com", testval);
    expect(e.github).tobe(testval);
});

test("does getrole() return \"engineer\"", () => {
    const testval = "engineer";
    const e = new engineer("john", 1, "john@john.com", testval);
    expect(e.getrole()).tobe(testval);
});

test("does getgithub() return github username", () => {
    const testval = "githubvalue";
    const e = new engineer("john", 1, "john@john.com", testval);
    expect(e.getgithub()).tobe(testval);
});