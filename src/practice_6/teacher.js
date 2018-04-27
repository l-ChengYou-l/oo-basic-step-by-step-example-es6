import Person from "../../src/practice_6/person.js";
module.exports = class Teacher extends Person {
    constructor(name,age,Class) {
        super(name, age)
        this.Class = Class
    }
    introduce(){
        if(this.Class !== undefined){
            return `${super.introduce()} I am a Teacher. I teach Class ${this.Class}.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }

    }
}





