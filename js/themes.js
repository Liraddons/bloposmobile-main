var cookieValue = document.cookie.replace(
  /(?:(?:^|.*;\s*)wall\s*\=\s*([^;]*).*$)|^.*$/,
  "$1",
);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementsByClassName('body')[0].style = "background-image: url(img/wallpaper/" + cookieValue + ".jpg);";
}); 

function wal(name) {
	document.cookie = "wall=" + name + '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
};
