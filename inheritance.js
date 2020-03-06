class Parent{
    constructor(){
        this.fatherName = "Nayan";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return `${this.name} ${this.fatherName}`;
    }
}

const nibo = new Child("Nibo");
console.log(nibo);
console.log(nibo.getFullName());