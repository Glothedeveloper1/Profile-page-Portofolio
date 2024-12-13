// document.getElementById('hire-btn').addEventListener('click',function (e)){
//     alert();
// }

function showAbout(){
    var about = document.getElementById('ab').style;
var cont = document.getElementById('cont').style;
var loc = document.getElementById('loc').style;

    loc.display = "none";
    cont.display = "none";
    about.display = "block";
    console.log("About");
}

function showContact(){
    var about = document.getElementById('ab').style;
var cont = document.getElementById('cont').style;
var loc = document.getElementById('loc').style;
    loc.display = "none";
    about.display = "none";
    cont.display = "block";
    console.log("Contact")
}

function showLocation(){
    var about = document.getElementById('ab').style;
var cont = document.getElementById('cont').style;
var loc = document.getElementById('loc').style;

    cont.display = "none";
    about.display = "none";
    loc.display = "block";
    console.log("Location")
}

