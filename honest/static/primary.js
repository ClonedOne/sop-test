console.log('Primary javascript')
console.log('setting the domain')
document.domain = "local.com";
console.log('opening new window');
var windowObjectReference = window.open('http://local.com:5000', 'newindow');
setTimeout(function(){
	var mydiv = windowObjectReference.document.getElementById('main_page');
	alert(mydiv.innerHTML);
}, 1000);
