/*var i=10;
while(i-->0)
{
    console.log(i);
}

var i=0;
while(i<=10)
{
 if(i%2==0)
 {
    console.log(i);
 }
   i++;
}

var i=0;
while(i<=10)
{
    console.log(i);
    i+=2;
}

var i=0;
while(true)
{
    console.log(i);
    if(10==i)
    {
        break;
    }
    i++;
}

var i=0;
console.log(i);
while(i++<5)
{
    console.log(i);
}
console.log("\n");
i=0

while(++i<5)
{
    console.log(i);
}
// do while
var i=0;
do{
    i++;
    console.log(i);
  
}
while(i<10)

// for loop
var i;
for(i=0;i<=10;i++)
{
    console.log(i);
}
i=0;
for(;;)
{
    i++;
    console.log(i);
    if(10==i)
    {
        break;
    }
}

var i;
for(i=0;i<10;i++)
{
    
    if(i%2!=0)
    {
        console.log(i);  
    }
}
//multiple loop
var i,j;
for(i=0,j=10;i<=10;i++,j--)
{
    console.log(i,j);
}

//factorial
var n=5;
var factorial=1;
for(var i=n;i>1;i--)
{
factorial*=i;
}
console.log(factorial);

//1-10 factorial
var factorial=1;
for(var i=1;i<=10;i++)
{
    factorial*=i;
    console.log(factorial);
}

//series
//1 2 3 4 5 6 7 8 .....
var i;
for(i=1;i<=10;i++)
{
    console.log(i);
}

//2 4 6 8 10 ....
var series=" ";
var n;
for(var i=1;i<10;i++)
{
    n=i*2;
    series=series + n + " ";
    
}
console.log(series);
//1 4 7 10...

var series="1 ";
var n=1;
for(var i=1;i<10;i++)
{
    n=n+3;
    series=series + n + " ";
    
}
console.log(series);
//0 3 8 15......
series="";
for(i=1;i<10;i++)
{
    n=i*i-1;
    series=series + n + " ";
}
console.log(series);
//1 4 3 8 5 12....

series="";
n;
for(i=1;i<10;i++)
{
    n=i;
    if(n%2==0)
    {
        n=i*2;
    }
    series=series + n + " ";
}
console.log(series);
//0 1 1 2 3 5 8.....
series="0 1 "
var n=0;
var x=0;
var y=1;
for(i=1;i<10;i++)
{
    n=x+y;
    x=y;
    y=n;
    series=series + n + " ";
}
console.log(series);

//multiplication
var series;

for(var i=1;i<=10;i++){
series=i+"=";
for(var j=1;j<=10;j++)
{
series=series+ i*j + " ";
}
console.log(series);
}

//divisors ceil diye man barai 1.6=2 r floor diye komai 1.6=1
var n=5;
var r=Math.ceil(Math.sqrt(n));
var divisors=" ";
for(var i=1;i<=r;i++)
{
    if(n%i==0)
    {
        if(i==n/i)
        {
        divisors+=i+ " ";
        } 
        else{
            divisors+=i+" "+(n/i)+" ";
        }

    }
    
}
console.log(divisors);
*/
//calender
var monthname="april, 2019";
var day=31;
var startday=1;
document.write("<br><br>", "Calender of", monthname ,"<br>");
document.write("sun","&nbsp","&nbsp","mon","&nbsp","&nbsp","tue","&nbsp","&nbsp","wed","&nbsp","&nbsp","thu","&nbsp","&nbsp","fri","&nbsp","&nbsp","sat","<br>")
for(var i=0;i<5;i++)
{
    var dayrow="";
    for(var j=1;j<=7;j++)
    {
        var currentday= 7*i + j - startday;
        if(currentday>day)
        {
            break;
        }
        else if(currentday<1)
        {
            currentday=" ";
        }
    if(currentday>9)
    {

dayrow+=currentday+"   ";
}
else
{
    dayrow+=currentday +"    ";
}
    }
    document.write(dayrow);
}




//
var monthname="january,2019"
var day=31;
var strtday=2;
console.log("\nMonth",monthname,"\n\n");
console.log("sun     mon     tue     wed     thu     fri     sat");
for(var i=0;i<5;i++)
{
    var rdy="";
    for(var j=1;j<=7;j++)
    {
        var crntdy= 7*i +j - strtday;
        if(crntdy>day)
        {
            break;
        }
        else if(crntdy<1)
        {
            crntdy=" ";
        }
        if(crntdy>9)
        {
            rdy+=crntdy+"      "
        }
        else{
            rdy+=crntdy+"       "
        }
    }
    console.log(rdy);
    
}
