import Person from "../../src/practice_4/person.js";
module.exports = class Worker extends Person {
    introduce(){
        return super.basic_introduce()+' I am a Worker. I have a job.'
    }
}


