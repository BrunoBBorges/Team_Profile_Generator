const employee = require("./employee");

class manager extends employee {
    constructor(name, id, email, officenumber) {
        super(name, id,email);
        this.officenumber = officenumber;
    }

    getrole() {
        return "manager";
    }

    getofficenumber() {
        return this.officenumber;
    }
}

module.exports = manager;