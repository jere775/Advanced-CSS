//veryhard
class Person{

    constructor(name,job,age){
        this.name = name;
        this.job = job;
        this.age = age;

    }
    exercise(){
        console.log(`I don't like to exercise - said every one.`);
    }
    fretchJob(){
        console.log(`${this.name} is a ${this.job}`);
    
    }

}

var p1 = new Person("Bob","back-end developer",18);

p1.exercise();
p1.fretchJob();

class programmer extends Person{
    
    constructor(name, job,age,languages){
        super(name,job,age);
        this.languages = languages;
        this.busy = true;
    }

    completeNewTask(){
        this.busy = false;
    }

    acceptNewTask(){
        this.busy = true;
    }

    offerNewTask(){
    if(this.busy){
        console.log(`${this.name} can't accept any new tasks right now`);
    }else {
        console.log(`${this.name} would love to take on a new responsibility`);
    }
}

learnLanguage(lang){
    this.languages.push(lang);
}

listLanguages(){
    for(let x = 0; x<this.languages.length; x++){
        console.log(this.languages[x]);
    }

}
}

var p1 = new Person("Judith", "Programmer", 21);
var c1 = new programmer("Judith", "Developer", 21, ["Java","Python","JavaScript"]);

c1.exercise();
c1.offerNewTask();
c1.completeNewTask();
c1.acceptNewTask();



