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
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);

  let text;

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    text = "Input not valid";
  }
  else
  {
    if(num1 > num2 & num1 > num3)
    {
      text = num1;
    }
    else if(num2 > num1 & num2 > num3)
    {
      text = num2;
    }
    else if(num3 > num1 & num3 > num2)
    {
      text = num3;
    }
    document.getElementById("answer1").innerHTML = "Result :" + text;
  } 
}

function checkEvenOdd()
{
  var evenodd = parseInt(document.getElementById("evenodd").value);
  let text;
  
  if(evenodd % 2 === 0)
  {
        text = "true";
  }
  else
  {
    text = "false";
  }
    
  document.getElementById("answer2").innerHTML = "Result :" + text;
}

function checkPrime()
{
  var prime = parseInt(document.getElementById("prime").value);
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
        break;
      }
      text = "true";
    }
  }
  document.getElementById("answer4").innerHTML = "Result :" + text;
}

function startCountdown()
{   
    let seconds = 100;
    setInterval(function () {

        seconds--;

        if(seconds % 2 === 0 && seconds != 0)
        {
          document.getElementById("timer").innerHTML = seconds;
        }

    }, 1000);
}

function sumof()
{
  var sumof = parseInt(document.getElementById("sumof").value);
  var result = 0;
  let text;
  
  if (isNaN(sumof) || sumof < 0) {
    text = "Input not valid";
  } 

  for(var x = 1; x <= sumof; x++)
  {
      result += x;
  }

  text = result;

  document.getElementById("answer5").innerHTML = "Result :" + text;
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

function mysteryGift()
{
  var giftPrice = 50;
  var price = parseInt(document.getElementById("mysteryGift").value);
  let text;
  
  if (isNaN(price)) {
    text = "Input not valid";
  } 

  if(price < giftPrice)
  {
    text = "Nope, too low"
  }
  else if(price > giftPrice)
  {
    text = "Nope, too high"
  }
  else if(price === giftPrice)
  {
    text = "You got it!"
  }

  document.getElementById("ex1").innerHTML = text;
}

function mysteryGift2()
{
  var giftPrice = 50;
  var price = parseInt(document.getElementById("mysteryGift2").value);
  let list = document.getElementById("ex2");
  let text;
  
  if (isNaN(price)) {
    text = "Input not valid";
  } 

  if(price < giftPrice)
  {
    text = "Nope, too low"
  }
  else if(price > giftPrice)
  {
    text = "Nope, too high"
  }
  else if(price === giftPrice)
  {
    text = "You got it!"
  }

  var listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(price + ", " + text));
  list.appendChild(listItem);
}