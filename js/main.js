window.onload = function(){
	
	var bodyWidth = document.body.offsetWidth;

	function setTwitterStyle() {
		frameContent = document.getElementById('twitter-widget-0').contentWindow.document;
		if (frameContent !== null) 
		{
			var frameBlockBg = frameContent.querySelector('.timeline-Widget');
			frameBlockBg.style.background = 'transparent';
		}
	}

	function slideMenu() {

		var buttonToggle = document.querySelector('.show-menu');
		var body = document.querySelector('.body');

		buttonToggle.addEventListener('click', function(){
			body.classList.toggle('left-menu-open');
		}, false);

		if(bodyWidth > 740)
		{
			body.classList.remove('left-menu-open');
		}

	}

	if(bodyWidth <= 740) {
		slideMenu()
	}

	window.addEventListener('resize', slideMenu, false);
}