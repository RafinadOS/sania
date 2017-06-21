function toggleTab()
{
	var tabs = document.querySelectorAll('.adress-tabs__item');
	var contains = document.querySelectorAll('.adress-tabs__wrapper');
	var maps = document.querySelectorAll('.map__item');

	var addClass = function()
	{
		if(this.classList.contains('adress-tabs__item-active'))
		{
			return
		}
		else
		{
			for(var i = 0; i < tabs.length; i++) 
			{
				tabs[i].classList.remove('adress-tabs__item-active')
			}
			this.classList.add('adress-tabs__item-active');

			for(var i = 0; i < contains.length; i++) 
			{
				contains[i].classList.remove('adress-tabs__wrapper-active')
			}
			document.querySelector('[data-adress="' + this.getAttribute('for') + '"]').classList.add('adress-tabs__wrapper-active');

			for(var i = 0; i < maps.length; i++) 
			{
				maps[i].classList.remove('map__item-active')
			}
			document.querySelector('[data-map="' + this.getAttribute('for') + '"]').classList.add('map__item-active');
		}
	}

	for(var i = 0; i < tabs.length; i++) 
	{
		tabs[i].addEventListener('click', addClass, false)
	}
}

toggleTab();
