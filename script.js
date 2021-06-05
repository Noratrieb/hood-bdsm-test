function start() {
    document.getElementById("start").classList.add("hide");
    document.getElementById("selection").classList.remove("hide");
}

function selection(e) {
    document.getElementById("selection").classList.add("hide");
    document.getElementById("result").classList.remove("hide");

    document.getElementById("result-text").innerHTML = e.innerHTML;
}

function restart() {
    document.getElementById("start").classList.remove("hide");
    document.getElementById("result").classList.add("hide");
}
