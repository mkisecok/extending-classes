
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
    return `Employee ID: ${this.id}
    Name       :${this.firstName} ${this.lastName}
    Tax ID     :${this.taxId}
    Pay        :${this.salary/12} €`
    }

}
const ourEmployee = new Employee(70007, 'Max', 'Musterman', 5477899, 48120);

console.log(ourEmployee.generatePaySlip() );