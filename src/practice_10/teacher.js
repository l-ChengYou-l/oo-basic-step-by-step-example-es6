import Person from "../../src/practice_10/person.js";
module.exports = class Teacher extends Person {
    constructor(id, name, age,klass) {
        super(id,name, age)
        this.classes = klass
    }
    introduce(){
        if(this.classes){
            return `${super.introduce()} I am a Teacher. I teach Class ${this.classes[0].number}, ${this.classes[1].number}.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }

    }
}









