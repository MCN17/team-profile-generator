const Employee = require("./employee");

// Engineer Class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;