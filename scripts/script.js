// JavaScript Document

//Functie om de popup te laten zien en weer hiden na 3 sec
function showRelic(id){
 	var element = document.getElementById(id);
	element.classList.add('active');
	setTimeout(function(){ element.classList.remove('active'); }, 3000);
}
