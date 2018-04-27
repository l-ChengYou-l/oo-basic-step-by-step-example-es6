import Person from "../../src/practice_4/person.js";
module.exports = class Student extends Person {
    constructor(name,age,Class) {
        super(name, age)
        this.Class = Class
    }
    introduce(){
        let basic = super.basic_introduce()
        return `${basic} I am a Student. I am at Class ${this.Class}.`
    }
}

