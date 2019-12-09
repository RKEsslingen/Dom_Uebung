
//Bild löschen 
document.addEventListener("click", removePicture);

function removePicture() {
    var x = document.getElementById("picture1");
    x.remove();
    document.removeEventListener("click", removePicture);
};

//2 Reihen Divs mit a 3 Divs und Random Zahlen
document.getElementById("button1").addEventListener("click", CreateDivs);

function CreateDivs() {
    var item2 = document.getElementsByClassName("item2")[0];
    var x;
    var y;
    var div = [];
    var color = [
        ["green", "yellow", "blue"],
        ["violet", "white", "powderblue"]
    ];
    var order = [1, 2, 3];

    for (x = 0; x < 2; x++) {
        div[x] = document.createElement("div");

        div[x].setAttribute("id", "div" + x);
        div[x].setAttribute("style", "width: 100%; height: 50%; display: flex; margin: 10px");

        item2.appendChild(div[x]);

        var divParent = document.getElementById("div" + x);

        for (y = 0; y < 3; y++) {
            div[x + y] = document.createElement("div");
            div[x + y].setAttribute("id", "div" + x + y);
            div[x + y].setAttribute("onclick", "move()");
            div[x + y].setAttribute("style", "width:33.3%;  height: 50%; margin: 10px; text-align: center; font-size: 80px");
            div[x + y].style.backgroundColor = color[x][y];
            // div[x + y].style.order = order[y];

            divParent.appendChild(div[x + y]);
        };

    };

    var i = 0;
    var j = 0;
    var z = 0;

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            z = Math.floor(Math.random() * 11);
            document.getElementById("div" + i + j).innerHTML = z;
        }
    }

    document.getElementById("button1").removeEventListener("click", CreateDivs);
}



//Kacheln bewegen
function move() {
    var q = document.getElementById(event.target.id);

    q.parentNode.insertBefore(q, q.parentNode.firstChild);
};


//DIV element aus dem mittleren Bereich löschen

document.getElementById("button2").addEventListener("click", removeDivs);

function removeDivs() {

    var z = Math.round(Math.random() * 2);
    var w = Math.round(Math.random() * 3);

    var removeElement = document.getElementById("div" + z + w);
    removeElement.parentNode.removeChild(removeElement);

};

//Knopf 6

document.getElementById("button6").addEventListener("click", removeDivParents);
document.getElementById("button6").addEventListener("click", NorrisJoke);


function removeDivParents() {
    var removeParentdiv0 = document.getElementById("div0");
    removeParentdiv0.parentNode.removeChild(removeParentdiv0);

    var removeParentdiv1 = document.getElementById("div1");
    removeParentdiv1.parentNode.removeChild(removeParentdiv1);

};

function NorrisJoke() {

    var WitzParent = document.getElementsByClassName("item2")[0];
    WitzParent.id = "WitzParent";
    WitzParent.style.height = "100%";
    var witzDiv = document.createElement("div");
    var NorrisBild = document.createElement("div");
    NorrisBild.id = "NorrisBild";
    NorrisBild.style.width ="50%";
    NorrisBild.style.height="100%";
    witzDiv.id = "Platzhalter";
    witzDiv.style.width ="50%";
    witzDiv.style.height="100%";

    WitzParent.appendChild(witzDiv);
    WitzParent.appendChild(NorrisBild);

    var Bild = document.createElement("img");
    Bild.src="https://images-eu.ssl-images-amazon.com/images/I/51LK4ZBSGqL.jpg";

    NorrisBild.appendChild(Bild);

    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data.value);
            document.getElementById("Platzhalter").innerHTML = data.value;
            
        });


};




