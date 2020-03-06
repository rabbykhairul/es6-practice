class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.school = "JS High School";
    }
}

const nibo = new Student(20201, "Nibo");
const chaya = new Student(202050, "Chaya");
console.log(nibo);
console.log(chaya);

console.log(`${nibo.id}: ${nibo.name}`);
console.log(`${chaya["id"]}: ${chaya["name"]}`);