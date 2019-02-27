function enlargeFontSize(element) {

    var fsize = parseInt(window.getComputedStyle(element).fontSize);

    element.style.fontSize = (++fsize) + "px";

}

function decreaseFontSize(element) {
    
    var fsize = parseInt(window.getComputedStyle(element).fontSize);
    
    element.style.fontSize = (--fsize) + "px";

}

window.onload = function() {

    let enlarge = document.getElementById("enlarge");
    let decrease = document.getElementById("decrease");
    let test = document.getElementById("test");

    enlarge.onclick = function() {

        enlargeFontSize(test);
    
    }

    decrease.onclick = function() {

        decreaseFontSize(test);

    }

}
