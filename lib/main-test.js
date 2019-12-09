'use strict';

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
    }
};
xmlhttp.open('GET', 'http://fortunecookieapi.herokuapp.com/v1/fortunes/1', true);
xmlhttp.send();