const Manager = require("../lib/Manager")

test("adds a manager", () => {
    const manager = new Manager("Connor", "5", "connor@gmail.com", "100")

    expect(manager.getRole()).toBe("Manager");
})

test("adds officeNumber", () => {
    const manager = new Manager("Dan", "6", "dan@gmail.com", "100")

    expect(manager.officeNumber).toBe("100");
})