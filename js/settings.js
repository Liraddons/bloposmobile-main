var cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)devtools\s*\=\s*([^;]*).*$)|^.*$/,
    "$1",
); 

var clicks = 0;

function devclicks() {
    clicks = clicks + 1;
    if(clicks == 10) {
        alert('Вы стали разработчиком');
        document.cookie = 'devtools=1; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    } else if(cookieValue == 1) {
        alert('Вы уже разработчик');
    };
};

document.addEventListener("DOMContentLoaded", function(){
    if(cookieValue == '1'){
        document.getElementById('fordev').style.display = "flex";
    };
}); 