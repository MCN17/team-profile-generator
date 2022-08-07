const Intern = require("../lib/Intern")

// Test for Intern
test("adds an Intern", () => {
    const intern = new Intern("Bruster", "8", "bruster@gmail.com", "Carleton")

    expect (intern.getRole()).toBe("Intern");
})

test("adds school", () => {
    const intern = new Intern("Bruster", "8", "bruster@gmail.com", "Carleton")

    expect(intern.school).toBe("Carleton");
})