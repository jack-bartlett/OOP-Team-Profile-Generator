const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, schoolname) {
        super(name, id, email)
        this.schoolname = schoolname;
    }

    getSchoolName() {
        return this.schoolname;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
