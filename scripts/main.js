let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if(mySrc ==="images/course.png")
    {
      myImage.setAttribute("src","images/test1.png");
    }
    else
    {
      myImage.setAttribute("src","images/course.png");
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() 
{
    let myName = prompt("请输入你的名字。");
    if(!myName ||myName.trim()===null)
      {
        setUserName();
      }
    localStorage.setItem("name",myName);
    myHeading.textContent = "Mozilla 酷毙了，"+ myName;

}
if(!localStorage.getItem("name"))
  {
    setUserName();
  }
  else
  {
    let stoedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，"+ stoedName;
  }

  myButton.onclick = function()
  {
    setUserName();
  }