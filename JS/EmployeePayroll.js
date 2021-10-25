//UC 11 EmployeePayrollData templates
class EmployeePayrollData{
    id;
    name;
    salary;
    //constructor to store data
    //params to pass any number of parameter not forced to give all parameters
    constructor(id,name,salary)
    { 
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    //Getter setter 
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;     
    }
    //Displaying the data in this format
    toString(){
        return "id = "+this.id+"\nName = "+this.name+"\nSalary = "+this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Diptimayee",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = 'Jayant';
console.log(employeePayrollData.toString());