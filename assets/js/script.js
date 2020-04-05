//нимацияы появления меню со всеми постами
let postButton = document.querySelector('.postBtn');
let page = document.querySelector('.classes');

postButton.onclick = function() {
    page.classList.toggle('ond');
    page.classList.toggle('hover');
};


//main code void time o'clock
function clock() {
	var date = new Date();
	var 
	    hours = date.getHours();
	    minutes = date.getMinutes();
	    seconds = date.getSeconds();

	var time = hours + ":" + minutes + ":" + seconds;

    $('.left_clock').html(time);
}
setInterval("clock()", 1000);
