const realnum=Math.floor((Math.random()*100)+1);
const button = document.getElementById("submit");
// let head=document.getElementById("heading").innerHTML;
console.log(realnum);
function clickbutton()
{
  const num=document.getElementById("input").value;
  if(num==realnum)
  {
    document.getElementById("heading").innerHTML=" Congratulations !! You guess right &#129395";
    document.querySelector(".class").style.display="none";


  }
  else{
    document.getElementById("heading").innerHTML="Try again";
    document.getElementById('input').value="";
  }
}
function playsound()
{
    const audio=new Audio("key_press.mp3");
    audio.play();
}

// let weight=53;
// let height=1.753;
// let bmi= weight/(height**2);
// console.log("BMI Value is:",bmi)
// if(bmi<=18.4)
// {
//     console.log("You are underweight")
// }
// else if(18.5<=bmi<=24.9)
// {
//     console.log("You are normal")
// }
// else
// {
//     console.log("You are overweight")
// }
// console.log("Leap Year checking")
// let year=prompt("Enter any year: ");
// console.log("Year is: ",year)
// if(year%4==0 || year%100!=0 && year%400==0)
// {
//     alert("Year is leap year")
// }
// else{
//     alert("Year is not leap year")
// }
// let age=prompt("Enter your age: ")
// let result=(age>18)? "You can die":"You cannot die"
// alert(result)

