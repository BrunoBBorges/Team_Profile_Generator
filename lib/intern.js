const employee = require("./employee");

class intern extends employee {
    constructor(name,email,id,school) {
        super(name, id, email);
        this.school = school;
    }

    getrole() {
        return "intern";
    }
    
    getschool(){
        return this.school;
    }
}

module.exports = intern;