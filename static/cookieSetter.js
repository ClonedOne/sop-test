document.cookie =
  "testcookie=" + encodeURIComponent("my test") +
  "; max-age=" + 60*60*24*30 +
  "; path=/; domain=local.com" ; 