console.log('Primary javascript')
console.log('setting the domain')
document.domain = "local.com";
console.log('opening new window');
var windowObjectReference = window.open('http://local.com:5000', 'newindow');
var mydiv = windowObjectReference.document.getElementById('main_page');
console.log(mydiv);