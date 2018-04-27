module.exports = class Class {
    constructor(klass){
        this.number = klass
    }
    getDisplayName(){
        return `Class ${this.number}`
    }
    registerJoinListener(teacher){
        this.join = teacher
    }
    registerAssignLeaderListener(teacher){
        this.assignleader = teacher
    }
    assignLeader(student){
        if(student.class.number == this.number){
            this.leader = student
        }else{
            console.log(`It is not one of us.`)
        }
        if(this.assignleader){
            console.log (`I am ${this.assignleader.name}. I know ${student.name} become Leader of Class ${this.number}.`)
        }
    }
    appendMember(student){
        if(student.class.number !== this.number) {
            student.class = this
        }
        if(this.join){
            console.log (`I am ${this.join.name}. I know ${student.name} has joined Class ${this.number}.`)
        }

    }
    isIn(student){
        if(student.class.number === this.number){
            return true
        }else{
            return false
        }
    }

}



