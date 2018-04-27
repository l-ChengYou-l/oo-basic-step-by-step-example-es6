import Person from "../../src/practice_7/person.js";
module.exports = class Student extends Person {
    constructor(name,age,klass) {
        super(name, age)
        this.class = klass
    }
    introduce(){
        let basic = super.introduce()
        return `${basic} I am a Student. I am at Class ${this.class.number}.`
    }
}




