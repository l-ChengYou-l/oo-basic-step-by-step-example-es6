import Person from "../../src/practice_2/person.js";
module.exports = class Student extends Person {
    constructor(name,age,Class) {
        super(name, age)
        this.Class = Class
    }
    introduce(){
        return 'I am a Student. I am at Class '+this.Class+'.'
    }
}
