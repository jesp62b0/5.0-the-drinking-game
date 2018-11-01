window.addEventListener("load", showStart)

function showStart() {

    console.log("visSiden");
    visSiden();
}



function visSiden() {

    document.querySelector("#startskaerm").classList.remove("hide");
    document.querySelector("#startskaerm").classList.add("show");
    document.querySelector("#start").classList.add("pulse");
    document.querySelector("#start").addEventListener("click", hideStart);

}

function hideStart() {

    console.log("startgame");
    document.querySelector("#start").classList.remove("pulse");
    document.querySelector("#startskaerm").classList.add("fade_out");
    document.querySelector("#titel_ui").classList.add("hide");


    startSpil()
}


function startSpil() {

    console.log("startspil");
    document.querySelector("game_elements").classList.add("show");

}


let points = 0;

document.querySelector("#beer1").addEventListener("click", clickGamebeer);

function clickGamebeer() {
    console.log("clickgamebeer");
    points++;
    document.querySelector("#points").textContent = points;


    console.log(points);
}
