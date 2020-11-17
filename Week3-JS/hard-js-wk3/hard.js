//hard
class pii{
    
    #name; 
    #ssn;
    
    constructor(name,ssn){

        this.#name = name;
        this.#ssn = ssn;

    }
    getName(){
        return this.#name;
    }
}

var p1 = new pii("judith", "000-00-0000");
var p2 = new pii("jj", "000-00-0000");

console.log(p1.getName());