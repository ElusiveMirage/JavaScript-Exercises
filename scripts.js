/* Place your JavaScript in this file */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function checkBiggest()
{
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  num3 = document.getElementById("num3").value;

  let text;

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    text = "Input not valid";
  } 
  else
  {
    if(num1>num2 && num1>num3)
    {
      text = num1;
    }
    if(num2>num1 && num2>num3)
    {
      text = num2;
    }
    if(num3>num1 && num3>num2)
    {
      text = num3;
    }
    document.getElementById("answer1").innerHTML = "Result :" + text;
  }
}

function checkPrime()
{
  var prime = document.getElementById("prime").value;
  let text;
  if (isNaN(prime) || prime < 0) {
    text = "Input not valid";
  } 

  if (prime === 1) {
    text = "1 is neither prime nor composite number.";
  }
  else if(prime === 2)
  {
    text = "true";
  }
  else
  {
    for(var x = 2; x < prime; x++)
    {
      if(prime % x === 0)
      {
        text = "false";
      }
      else
      {
        text = "true";
      }
    }
  }
  document.getElementById("answer4").innerHTML = "Result :" + text;
}

function startCountdown()
{   
    let seconds = 100;
    setInterval(function () {

        seconds--;

        if(seconds % 2 === 0)
        {
          document.getElementById("timer").innerHTML = seconds;
        }

    }, 1000);
}

function Factorial() {

  let x = document.getElementById("factorial").value;

  let text;
  if (isNaN(x) || x < 0) {
    text = "Input not valid";
  } 
  else {
    if (x === 0 || x === 1)
    {
        text = "1";
    }
    else
    {
        for(var i = x - 1; i >= 1; i--)
        {
            x = x * i;
        }
        text = x;
    }
  }
  document.getElementById("answer6").innerHTML = "Result :" + text;
}