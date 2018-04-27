import Person from "../../src/practice_9/person.js";
module.exports = class Student extends Person {
    constructor(id,name,age,klass) {
        super(id,name,age)
        this.class = klass
    }
    introduce(){
        let basic = super.introduce()
        if(this.class.leader){
            return `${basic} I am a Student. I am Leader of Class ${this.class.number}.`
        }else{
            return `${basic} I am a Student. I am at Class ${this.class.number}.`
        }
    }
}






