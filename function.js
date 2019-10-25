/*

function sayHello(name)
{
    if(name)
    {
        document.write("hello world","<br>",name ,"<br>");

    }
    else{
        document.write("everything is possible","<br>"); 
    }
    
}

sayHello("rahim");
sayHello("");
sayHello();
 
function sayEven(number)
{
    if(number % 2 == 0)
    {
       return true;
    }
    else{
return false;
    }
}
document.write(sayEven(12),"<br>");
document.write(sayEven(15),"<br>");
document.write(sayEven(0),"<br>");
document.write(sayEven(6));

//default  value

function sayHello(name = "not name", age="undefine" )
{
    
        document.write("hello world","&nbsp",name,"&nbsp",age,"<br>");
    
}

sayHello("rahim",12);
sayHello();
sayHello();

//reverse
function  reverseString(data)
{
    var reversedString = data.split('').reverse().join('');
    return reversedString;

}

var sentenceString= reverseString("hello world");
var sentenceString1= reverseString("hello");
console.log(sentenceString,sentenceString1);
*/
let i=12;
function last()
{
    let i=20;
    if(true)
    {
        let i=13;
        console.log(i)
    }
  
    console.log(i)
}

last();
console.log(i);
