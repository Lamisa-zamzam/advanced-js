const normalPerson = {
    firstName:"Rahim",
    lastName:"Uddin",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName); 
    },
    chargeBill :function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips -tax;
        return this.salary;
    }
}


const heroPerson = {
    firstName: "Hero",
    lastName: "Gulom",
    salary: 25000,
}

const friendlyPerson = {
    firstName: "Hero",
    lastName: "Golum",
    salary: 25000,
}

// normalPerson.chargeBill();
// const heroBill = normalPerson.chargeBill.bind(heroPerson);
// heroBill(2000);

// normalPerson.chargeBill(100);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30)
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson,[4000,400, 40]);
console.log(heroPerson.salary);