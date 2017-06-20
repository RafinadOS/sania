var tabs;

var tabs = {
	getTabs: function() {
		this.tabs = document.querySelectorAll('.adress-tabs__item');
		this.setEvent(this.tabs);
	},
	addClass: function() {
		console.log(this);
	},
	setEvent: function(tabs) {
		for(var i = 0; i < tabs.length; i++)
		{
			tabs[i].addEventListener('click', this.addClass, false)
		}
	}
};
	
tabs.getTabs();
