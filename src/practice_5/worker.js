import Person from "../../src/practice_5/person.js";
module.exports = class Worker extends Person {
    introduce(){
        return super.introduce()+' I am a Worker. I have a job.'
    }
}



