//CREATE FRAGMENT
window.onload = function() {
    var parent = document.getElementById('idUnderlay');
    var divs = document.getElementsByClassName('window');
    var divsBlack = document.getElementsByClassName('windowA');
    var frag = document.createDocumentFragment();

    while(divs.length) {
        frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
    }
    while(divsBlack.length) {
        frag.appendChild(divsBlack[Math.floor(Math.random() * divsBlack.length)]);
    }

    parent.appendChild(frag);
}

//MEMORY GAME
document.getElementById('idUnderlay').addEventListener("mousedown", fadeWindow);
    var count = 0;
    var index1;
    var index2;
    var index3;
    var index4;
    var picture1;
    var picture2;

function fadeWindow(e) {
	if(count <= 1) {

		if(e.target.classList.contains('windowA')) {
            e.target.style.zIndex ="-1";           

            if(count == 0) {
                var classItems = document.getElementsByClassName('window');
                index1 = Array.from(e.target.parentElement.children).indexOf(e.target);  //Day 16 1:29
                index2 = index1 - classItems.length;
                picture1 = classItems[index2].innerHTML;
            }   

            if(count == 1) {
                index3 = Array.from(e.target.parentElement.children).indexOf(e.target);  
                var classItems = document.getElementsByClassName('window');
                index4 = index3 - classItems.length;
                picture2 = classItems[index4].innerHTML;

                onmouseup = function() {
                    if(picture1 == picture2) {
                        alert("Sie haben GEWONNEN!");
                    } else {
                        alert("Falsche Auswahl");
                    }
                }
            }
            count++;
		}
	}
}
