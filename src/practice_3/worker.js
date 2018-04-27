import Person from "../../src/practice_3/person.js";
module.exports = class Worker extends Person {
    introduce(){
        return 'I am a Worker. I have a job.'
    }
}

