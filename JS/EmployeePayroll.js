//UC 13 EmployeePayrollData templates with regex expression

class EmployeePayrollData
{   
    //Getter and setter method
    get id()
    {   
        return this._id;
    }
    set id(id)
    {
       let idRegex=RegExp("^[1-9][0-9]{0,}$");
       if(idRegex.test(id)) //test() is to match input with regex pattern
       {
       this._id=id;
       }
       else
       {
           throw "Incorrect id";
       }
    }
    get salary()
    {
        return this._salary;
    }
    set salary(salary)
    {
        let salaryRegex=RegExp("^[1-9][0-9]{2,}$");
        if(salaryRegex.test(salary))
        {
        this._salary=salary
       }
       else
       {
        throw "Incorrect salary";
       }
    }
    get gender()
    {
        return this._gender;
    }
    set gender(gender)
    {
        let genderRegex=RegExp("^[M|F|m|f]$");
        if(genderRegex.test(gender))
        {
        this._gender=gender
       }
       else
       {
        throw "Incorrect gender";
       }
    }
    
   get startDate()
   {
       return this._startDate;
   }
   set startDate(startDate)
   {
        if(startDate<=new Date())
        {
            this._startDate=startDate;
        }
        else
        {
            throw "Future date can not be valid";
        }
    }
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
}

let newEmployee=new EmployeePayrollData(1,"Mahima","F",30000,new Date());

try 
{
    newEmployee.name = "yamini";
    console.log(newEmployee.toString());
} 
catch (ex) 
{
    console.log("Pattern not matched")
    console.error(ex);
}

try
{
    newEmployee.id=3;
    console.log(newEmployee.id);
}
catch(ex)
{
    console.error(ex);
}

try
{
    newEmployee.salary=50000;
    console.log(newEmployee.salary);
}
catch(ex)
{
    console.error(ex);
}

try
{
    newEmployee.gender='m';
    console.log(newEmployee.gender);
}
catch(ex)
{
    console.error(ex);
}

try
{
    newEmployee.startDate=new Date("2022-10-25");
    console.log(newEmployee.startDate);
}
catch(ex)
{
    console.error(ex);
}