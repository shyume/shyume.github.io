//1
var number=1; //var宣告一個盒子為number，把1放進去
console.log(number); //console顯示
//console.log("Hello");

//2
var count=0;
count = count + 1;
console.log(count);

//3
var count=0;
count = count - 1;
console.log(count);

//4
var count=0;
count = count + 1;
count = count - 1;
console.log(count);

//5
var a = 3;
var b = a++; var c= ++a;
console.log(b);
console.log(c);

//6
console.log(3 ==="3"); //把關較嚴謹
console.log(3 =="3"); //把關不嚴謹
console.log(3 !=="3");
console.log((3 < 4)&&(5 > 6));

//7
var i = true;
var j=!i;
var k=!j;
console.log(j);
console.log(k);

//8
var a = 15;
var b = a + 11;
var c = b – 20;
var d = c * 9;
var e = d %10;
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//9
var count = 3;
console.log("我買" + count + "個橘子去，你就在此處不要走動。");
// 我買3個橘子去，你就在此處不要走動

//10
var add = function(x,y)
{
	return x+y;
}
console.log(add(2,3));

//11
var pi = 3.14;
function area(r){
return r*r*pi;
}
console.log(area(10));

//12
var score=90;
if (score>=80) {
	console.log("A");
}
else if(80> score && score>=70){
	console.log("B");
}
else if(70> score && score>=60){
	console.log("C");
}
else (
{
	console.log("D"); //以上條件不符合，印出D
}

//13
var fruittype = ("蘋果")
switch (fruittype) {
case "橘子":
console.log("橘子一公斤 $50元 < br > "); //< br >斷行
break;
case "蘋果":
console.log("蘋果一公斤 $100元 < br > ");
break;
case "香蕉":
case "鳳梨":
console.log("香蕉跟鳳梨大特賣 < br > ");
break;
default:
console.log("不好意思， 沒有你要的 " + fruittype + ". < br > ");
}