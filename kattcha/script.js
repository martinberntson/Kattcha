var kattchakatts = document.getElementsByClassName("katt");
var kattchas = document.getElementsByClassName("kattcha");
const button = document.getElementsByTagName("button");

var toggleFunctionKattchas = function() {
    if (this.classList.contains("vald")){
        this.classList.remove("vald");
    }
    else {
        this.classList.add("vald");
    }
    checkIfCorrect();
}

for (var i = 0; i < kattchas.length; i++){
    kattchas[i].addEventListener('click', toggleFunctionKattchas, false);
}

var checkIfCorrect = function() {
    var checkKattchas = true;
    var checkKattchakatts = true;
    for (var i = 0; i < kattchakatts.length; i++){
        if (kattchakatts[i].classList.contains("vald") == false){
            checkKattchakatts = false;
        }
    }
    for (var i = 0; i < kattchas.length; i++){
        if ((kattchas[i].classList.contains("vald") == true) && (!kattchas[i].classList.contains("katt"))){
            checkKattchas = false;
        }
    }
    if (checkKattchakatts == true && checkKattchas == true){
        document.getElementById("button").disabled = false;
    }
    else{
        document.getElementById("button").disabled = true;
    }
}