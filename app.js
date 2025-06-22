//CHAPTER NO 06-09;
//QUESTION NO 01;
let num = 10;
document.writeln("Result"+"<br>");
document.writeln("The value of num is :"+num+"<br>");
document.writeln(".........................................."+"<br><br>");
document.writeln("The value of ++num is :"+(++num)+"<br>");
document.writeln("Now the value of num is:"+num+"<br><br>");

document.writeln("The value of num++ is:"+(num++)+"<br>");
document.writeln("Now the value of num is:"+num+"<br><br>");

document.writeln("The value of --num is:"+(--num)+"<br>");
document.writeln("Now the value of num is:"+num+"<br><br>");

document.writeln("The value of num-- is:"+(num--)+"<br>");
document.writeln("Now the value of num is:"+num+"<br><br>");
//QUESTION NO 02;
var a = 2,b= 1;
var Result= --a - --b + ++b+b--;
document.writeln("a is :"+a+"<br>");
document.writeln("b is :"+b+"<br>");
document.writeln("result is :"+ Result+"<br>");
//QUESTION NO 03;
let user = prompt("what's your name");
document.writeln("<h4>welcome" +  user + "! </h4>");
//QUESTION NO 04;
var number =prompt("enter a number to display it's multiplication table","5");
if (number === null || number.trim() === "") {
    number = 5;
} else {
    number = +number;
}
document.writeln("<h3>multiplication table of "+number+"</h3>");
for (var i= 1;i<=10;i++){
document.writeln(number+"x"+i+"="+(number*i)+"<br>");
}
//QUESTION NO 05;
// part=a
var subject1 = prompt("enter name of the first subject");
var subject2 = prompt("enter name of the second subject");
var subject3 = prompt("enter name of the third subject");
//part=b
let totalPerSubject = 100;
//part=c
var mark1 = + prompt("enter obtained  mark for" +subject1+ " :");
var mark2 = +prompt("enter obtained mark for" +subject2+ " :");
var  mark3  = +prompt("enter obtained mark for" +subject3 + " :");
//part=e
var totalobtained = mark1+mark2+mark3;
let totalmarks = 3 * totalPerSubject;
var percentage1 = (mark1/totalPerSubject)*100;
var percentage2 = (mark2/totalPerSubject)*100;
var percentage3 = (mark3/totalPerSubject)*100;
var totalPercentage=(totalobtained/totalmarks)*100;
document.writeln("<h3>Marksheet for Three subject</h3>");
document.writeln("<h4>Subject | Total Marks | Obtained Marks | percentage</h4>");
document.writeln(subject1+" | 100 | " +mark1+" | "  +percentage1+"%"  +"<br>");
document.writeln(subject2+" | 100 | " +mark2+" | "  +percentage2+"%"  +"<br>");
document.writeln(subject3+" | 100 | " +mark3+" | "  +percentage3+"%"  +"<br>");
document.writeln("<h4>Total | "+totalmarks+ " | "+totalobtained+  " | " +totalPercentage+"%</h4>");

//end



