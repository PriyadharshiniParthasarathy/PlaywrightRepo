//LaunchBrowser need to take input as browserName (string) and do not return any
//- use if-else (chrome or otherwise)
//- Print the value

function launchBrowser(browserName)
{
    if(browserName = "chrome")
    {
        console.log("---Navigate into chrome browser---")
    }
    else if (browserName = "Edge")
        {
        console.log("---Navigate into edge browser---")
    }
}

launchBrowser("chrome")

//runTests need to take input as testType (string) and do not return any
//use switch case (smoke, sanity, regression, default (smoke))
//Print the values
function runTests (testType)
{
    switch(testType)
    {
        case "smoke":
        console.log ("---Smoke testing is completed---");
        break;

        case "sanity":
        console.log ("---Sanity testing is completed---");
        break;

        case "regression":
        console.log ("---Regression testing is completed---");
        break;

        default:
        console.log ("---Basic testing---");
        
    }
}
  
runTests("regression")
