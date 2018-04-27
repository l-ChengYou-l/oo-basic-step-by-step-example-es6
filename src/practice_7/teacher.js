import Person from "../../src/practice_7/person.js";
module.exports = class Teacher extends Person {
    constructor( name, age,klass) {
        super(name, age)
        this.class = klass
    }
    introduce(){
        if(this.class !== undefined){
            return `${super.introduce()} I am a Teacher. I teach Class ${this.class.number}.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }

    }
    introduceWith(studentJerry){
        if(studentJerry.class.number == this.class.number){
            return `${super.introduce()} I am a Teacher. I teach ${studentJerry.name}.`
        }else{
            return `${super.introduce()} I am a Teacher. I don't teach ${studentJerry.name}.`
        }

    }
}






