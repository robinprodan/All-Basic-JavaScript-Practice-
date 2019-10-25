/*//lenght
var fruit=["apple","orange","banana","plum","gouva"];
//console.log(fruit);
console.log(fruit.length)
console.log(fruit[5])
fruit[5]="jackfruit";
console.log(fruit[5])
console.log(fruit.length)
var lastoffset=fruit.length-1;
console.log(fruit[lastoffset]);   
               
//
var fruit=["apple","orange","banana","plum","gouba"];
fruit[fruit.length]="sofeda";//last a add
fruit.push("jackfruit");//last a element add kre
fruit.unshift("plum");//first a add
fruit.pop();//last a pop kre
//var lastElement = fruit.pop();//ki pop hyce ta dka jai

//document.write( lastElement); 

fruit.shift();//first delete
//var firstElement=fruit.shift();

document.write(fruit); 
//document.write( firstElement); 

var male=["robin","ikhtiar","rahima","roni"];
var female=["sadiya","joya"];
//var add=male.pop();
//female.push(add);
var middleDelete=male[2];
//delete(male[2]);
male.splice(2,1);//middle delete
female.push(middleDelete);
document.write(male,"<br>",female,"<br>");
document.write(male.length,"&nbsp",female.length);

//slice 
var list=[
"sun",//0=-7
"mon",//1=-6
"tue",//2=-5
"wed",//3=-4
"thu",//4=-3
"fri",//5=-2
"sat",//6=-1
];
//var chunk=list.slice(1,5)
//var length=list.length-3
//var chunk=list.slice(length)
var chunk=list.slice(-5,-1)

document.write(list,"<br>",chunk);
 

//splice
var list=[
    "sun",//0=-7
    "mon",//1=-6
    "tue",//2=-5
    "wed",//3=-4
    "thu",//4=-3
    "fri",//5=-2
    "sat",//6=-1
    ];
    //var chunk=list.splice(1,4)
    var chunk=list.splice(-4,3);
    document.write(list,"<br>",chunk);
   
   //shallow and deep copy

     //arry copy 
     var list=[
        "sun",//0=-7
        "mon",//1=-6
        "tue",//2=-5
        "wed",//3=-4
        "thu",//4=-3
        "fri",//5=-2
        "sat",//6=-1
        ];
        var list2=list.slice();
        //var list2=Array.from(list)
        //var list2=[...list];
        list2[1]="no day";
    
        document.write(list,"<br>",list2);
        

//array marge
var list1=[
   "sun",
   "mon",
   "tue",
   ];
   var list2=[
   "wed",
   "thu",
   ]
   var list3=
   [
      "fri",
      "sat",
   ]
  var list=list1.concat(list2,list3);
   // var list=[].concat(list1,list2,list3);
   document.write(list);
   

    //array for loop
    var day=[
      "sun",
      "mon",
      "tue",
      "wed",
      "thu",
      "fri",
      "sat",
      ];
     //var length =day.length;
     // for(i=0;i<length;i++)
      //for(i=length-1;i>=0;i--) reverse
    //  {
      //   document.write("count&nbsp",i,"&nbsp","days&nbsp",day[i],"<br>");

    //  }
      
      for(i in day)
      {
         document.write("count&nbsp",i,"&nbsp","days&nbsp",day[i],"<br>");
      }
      
     //empty element remove
     var day=[
      "sun",

      '',
      "mon",
      ,
      ,
      "tue",
      NaN,
      "wed",
      "thu",
      "fri",
      null ,
      "sat",
      ];
var newDay=[];
//var newDay=day.filter(Boolean)
for(i in day)
{
  if(day[i])
  {
     newDay.push(day[i]);
  }
 
}
console.log(newDay);

//sorting
var list=[
 1,222,44,99,-3,10,8,11
]
//list.sort(); string be sort 
var length=list.length-1;
for(var i=0;i<length;i++)
{
   for(var j=0;j<length;j++)
   {
      if(list[j]>list[j+1])
      {
         [ list[j], list[j+1] ] = [ list[j+1] ,list[j] ]
      }
  
   }

}

document.write(list)

//স্ট্রিং থেকে অ্যারে এবং অ্যারে থেকে স্ট্রিং
var s="hi i am ikhtiar uddin ahmmed rabin ";
var a=s.split(" ");
var j=a.join("-")
document.write(j)
//document.write("i am robin".split(" ").join("_"));

//reverse
var n="robin prodan";
var rev= n.split("").reverse().join("");
document.write(rev);
*/
//
var r="ikhtiar.uddin.ahmmed.rabin.prodan";
var j=r.split(".");
document.write(j.length,"<br>");
var j=r.split("");
document.write(j.length,"<br>");
var i=r.split("i");
document.write(i.length-1);


