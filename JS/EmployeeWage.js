
//Uc1 checking employee attendance 
    const IS_ABSENT=0;

    //Using random 
    let empCheck=Math.floor(Math.random()*10)%2;

    if(empCheck==IS_ABSENT)
    {
      console.log("Emplyoee is absent");
    }
    else
    {
       console.log("Emplyoee is present");
    }