var albumArray = ["dad.jpg", "mom.jpg", "big brother.jpg", "me.jpg"];
var nameArray = ["dad", "mom", "big brother", "me"];
var i = 0;

function next() {

    if (i == 4) {
        i = 0;
    }

    document.getElementById("album").src = albumArray[i];
    document.getElementById("name").innerHTML = nameArray[i];
    i++;


}
