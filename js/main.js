var elform = document.querySelector(".hero__form");
var elinput = document.querySelector(".hero__form-input");
var elbtn = document.querySelector(".hero__btn");
var elwalk = document.querySelector(".hero__item-walk");
var elbike = document.querySelector(".hero__item-bike");
var elcar = document.querySelector(".hero__item-car");
var elplane = document.querySelector(".hero__item-plane");

var piyoda = 3.6; // km/soat
var velosiped = 20.1; // km/soat
var moshina = 70; // km/soat
var samaliyot = 800; // km/soat

elform.addEventListener
    ("submit", function(evt)
    {
    evt.preventDefault();
    console.log(elinput.value);

    var resultwalk = Math.floor(elinput.value / 3.6);
    var resultbike = Math.floor(elinput.value / 20.1);
    var resultcar = Math.floor(elinput.value / 70);
    var resultplane = Math.floor(elinput.value / 800);

    elwalk.innerHTML = resultwalk + "soat " + Math.floor(((elinput.value / 3.6) - resultwalk) * 60) + "minut";
    elbike.innerHTML = resultbike + "soat " + Math.floor(((elinput.value / 20.1) - resultbike) * 60) + "minut";
    elcar.innerHTML = resultcar + "soat " + Math.floor(((elinput.value / 70) - resultcar) * 60) + "minut";
    elplane.innerHTML = resultplane + "soat " + Math.floor(((elinput.value / 800) - resultplane) * 60) + "minut";
    }
    )