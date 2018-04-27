import Person from "../../src/practice_8/person.js";
module.exports = class Teacher extends Person {
    constructor(id, name, age,klass) {
        super(id,name, age)
        this.class = klass
    }
    introduce(){
        if(this.class){
            return `${super.introduce()} I am a Teacher. I teach Class ${this.class.number}.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }

    }
}







