const Engineer = require("../lib/Engineer")

test("adds an engineer", () => {
    const engineer = new Engineer("Patrick", "7", "patrick@hotmail.com", "patricky89")

    expect(engineer.getRole()).toBe("Engineer")
})

test("adds github", () => {
    const engineer = new Engineer("Patrick", "7", "patrick@hotmail.com", "patricky89")

    expect(engineer.github).toBe("patricky89")
})