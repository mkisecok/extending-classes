
class Employee
{
    constructor(id, firstName, lastName, taxId, salary)
    {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.taxId=taxId;
        this.salary=salary;
    }

    generatePaySlip()
    {
    return `    Employee ID:${this.id} 
    Name:${this.firstName} ${this.lastName}
    Tax ID:${this.taxId} 
    Pay:${this.salary/12} €`
    }

}
const ourEmployee = new Employee(70007, 'Max', 'Musterman', 5477899, 48120);

console.log(ourEmployee.generatePaySlip() );

console.log('='.repeat(50));

class Manager extends Employee
{
    constructor(id, firstName, lastName, taxId, salary)
        
    {   super(id, firstName, lastName, taxId, salary);
        
        this.managedEmployees=[]
    };

    addManagedEmployee(input)
    {
        this.managedEmployees.push(input)
    
    }
  

   removeManagedEmployee(id)
    {  
      
       this.managedEmployees= this.managedEmployees.filter(function(e){
           return e.id !== id;
        })

    }
       
}

const ourManager = new Manager(695321, 'Bernth', 'Musterman', 123654, 36000);

console.log(ourManager. generatePaySlip());

console.log('='.repeat(50));

const newEmployee = new Employee(987654, 'Jack', 'Koenig', 546546, 24000);
const newEmployee2 = new Employee(10000, 'Bor', 'Katr', 546546, 24000);

ourManager.addManagedEmployee(newEmployee);
ourManager.addManagedEmployee(newEmployee2);
ourManager.removeManagedEmployee(987654);
console.log(ourManager);


