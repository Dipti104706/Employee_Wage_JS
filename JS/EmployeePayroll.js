//UC 13 EmployeePayrollData templates with regex expression

class EmployeePayrollData{
    id;
    gender;
    salary;
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
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(value))
        {
            this._name = value;
        }
        else 
        {
            throw "Incorrect name";   
        } 
    }

    toString()
    {
        const options={year:'numeric',month:'long',day:'numeric'};
        const empDate=this.startDate== undefined? "undefined":this.startDate.toLocaleDateString("en-US",options);
        return "id = "+this.id+"\nName = "+this.name+"\nGender = "+this.gender+"\nSalary = "+this.salary+"\nStartdate = "+empDate;
    }

}

let newEmployee=new EmployeePayrollData(1,"Mahima","F",30000,new Date());
console.log(newEmployee.toString());

try 
{
    newEmployee.name = "yamini";
    console.log(employee.toString());
} 
catch (ex) 
{
    console.log("Pattern not matched")
    console.error(ex);
}
try 
{
    let employee = new EmployeePayrollData(1,"Shashank",30000,"M",new Date());
    console.log(employee.toString());
}
catch (ex) 
{
    console.error(ex);
}