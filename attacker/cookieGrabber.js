function get_cookie ( cookie_name )
{
  var cookie_string = document.cookie ;
  if (cookie_string.length != 0) {
    var cookie_value = cookie_string.match ( '(^|;)[\s]*' + cookie_name + '=([^;]*)' );
    return decodeURIComponent ( cookie_value[2] ) ;
  }
  return '' ;
} 

console.log(get_cookie('testcookie'));