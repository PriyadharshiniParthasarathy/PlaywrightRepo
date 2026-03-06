function numbertype (number){
    let numb = "";
    if(number > 0)
    {
        numb ="This is postive number";
    }
    else if (number < 0)
        {
         numb ="This is negative number";
    }
    else
    {
    numb ="This is Zero number";
    }

    return numb;
}
    let result = numbertype(-5);
    console.log(result);
