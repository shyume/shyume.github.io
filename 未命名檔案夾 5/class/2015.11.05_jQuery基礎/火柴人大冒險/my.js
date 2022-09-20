var currentScene = 0;

var changeScene=function(decision)
{

	if (currentScene ==0) /*"=="判斷是否相等*/
	{
		currentScene=1; /*"="設定的意思*/
	}
	else if (currentScene  ==1) 
	{
		currentScene=decision==1?2:3; /*判斷是不是1，是的話到場景2，不是的話場景3*/
	}
	else if (currentScene  ==2) 
	{
		currentScene=decision==1?4:5; /*判斷是不是1，是的話到場景4，不是的話場景5*/
	}
	else if (currentScene  ==3) 
	{
		currentScene=decision==1?6:7; /*判斷是不是1，是的話到場景6，不是的話場景7*/
	}
	else if (currentScene  ==4) 
	{
		currentScene=decision==1?8:5; /*判斷是不是1，是的話到場景8，不是的話場景5*/
	}
	else if (currentScene  ==7) 
	{
		currentScene=decision==1?9:6; /*判斷是不是1，是的話到場景9，不是的話場景6*/
	}
	document.getElementsById("sceneimg").src = "scene" + currentScene +".png";
	
}