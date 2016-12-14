function ShowTime(){
    var new_time = new Date();
    var par = document.getElementById("time");
    par.innerHTML = new_time.toLocaleTimeString();
    setTimeout(ShowTime,1000);
}

//var app = angular.module('TestProject');
//app.controller('TestCtrl', function(){
//
//});





function GetValues() {

    var request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:3000/api/todos/',false);
    request.send();
    //alert("GotJSON");
    //alert(request);
    var a = request.responseText;
    alert(a);
    //var jsondoc = JSON.parse(request.responseText);
    var arr = JSON.parse(a);
    var div1 = document.getElementById("d1");
    for(var i = 0; i < arr.length; i++) {
      var text = document.createTextNode("1-------------" + arr[i].text);
      var p = document.createElement("p");
      p.appendChild(text);
      div1.appendChild(p);
    }
    //var div1 = document.getElementById("d1");
    //var text = document.createTextNode(a);
    //var p = document.createElement("p");
    //p.appendChild(text);
    //div1.appendChild(p);
    //alert("Got values");

}


function DeleteDid(){
    var request = new XMLHttpRequest();
    request.open('DELETE','http://localhost:3000/api/todos/1',false);
    request.send();
}

function CreateDo(){
    var request = new XMLHttpRequest();
    var todo = JSON.constructor({text: "new Did", state: 0});
    request.open("GET", 'http://localhost:3000/api/todos/',false);
    request.send();
    var a = request.responseText;
    alert(a);
    //request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    //request.onreadystatechange =



}




window.onload = function(){
    ShowTime();
};
/*

*/
