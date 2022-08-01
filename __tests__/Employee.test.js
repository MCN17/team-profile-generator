const Employee = require("../lib/Employee")

test("creates an employee", () => {
    const employee = new Employee("Dan", "4", "rdnolan8@outlook.com")

    expect(employee.name).toBe("Dan")
    expect(employee.id).toBe("4")
    expect(employee.email).toBe("rdnolan8@outlook.com");

    expect(employee.getName()).toBe("Dan")
    expect(employee.getId()).toBe("4")
    expect(employee.getRole()).toBe("Employee")
})

