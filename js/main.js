window.onload = function(){
	
	var showTab = function()
	{
		console.log('ro');
	}

	var tabs = document.querySelectorAll('.adress-tabs__item');

	for(var i =0; tabs.length < 0; i++)
	{
		tabs[i].addEventListener('click', showTab, false);
		console.log(tabs[i]);
	}

	console.log(tabs);
	
}