import Person from "../../src/practice_6/person.js";
module.exports = class Student extends Person {
    constructor(name,age,Class) {
        super(name, age)
        this.Class = Class
    }
    introduce(){
        let basic = super.introduce()
        return `${basic} I am a Student. I am at Class ${this.Class}.`
    }
}



