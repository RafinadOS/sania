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

function showpopup()
{
	var buttons = document.querySelectorAll('.button-callback');
	document.querySelector('.popup__close').addEventListener('click', function()
			{
				document.body.classList.toggle('popup-show')
			}, false)

	for(var i = 0; i < buttons.length; i++)
	{
		buttons[i].addEventListener('click', function()
			{
				document.body.classList.toggle('popup-show')
			}, false)
	}
}

function setTypeInput()
{
	var inputs = document.querySelectorAll('.form-send__input-phone');

	for(var i = 0; i < inputs.length; i++)
	{
		inputs[i].setAttribute('type', 'number');
	}
}

showpopup();
toggleTab();

document.getElementById('toggle-menu').addEventListener('click', function()
	{
		document.body.classList.toggle('sidebar');
	}, 
false)