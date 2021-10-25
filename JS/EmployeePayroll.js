//UC 12 EmployeePayrollData templates
class EmployeePayrollData{
    id;
    gender;
    salary;
    //Uc 12 extent Refactored to add gender and salary
    startDate;
    //constructor to store data
    //params to pass any number of parameter not forced to give all parameters
    constructor(...params)
    { 
        this.id = params[0];
        this.name = params[1];
        this.gender = params[2];
        this.salary = params[3];
        this.startDate = params[4];
    }
    
    //Getter and setter method
    get name()
    {
        return this._name;
    }
    set name(value)
    {
        this._name = value;     
    }

    toString()
    {
        const options={year:'numeric',month:'long',day:'numeric'};
        const empDate=this.startDate== undefined? "undefined":this.startDate.toLocaleDateString("en-US",options);
        return "id = "+this.id+"\nName = "+this.name+"\nGender = "+this.gender+"\nSalary = "+this.salary+"\nStartdate = "+empDate;
    }

}
let employeePayrollData = new EmployeePayrollData(1,"Diptimayee",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = 'Jayant';
console.log(employeePayrollData.toString());
let newEmployee=new EmployeePayrollData(1,"Mahima","F",30000,new Date());
console.log(newEmployee.toString());