function change(){
    var buma = document.getElementById('buma');
    var bd = document.getElementById('body');
    var navigator = document.getElementById('navbar');

    if (buma.className == 'fa fa-moon-o') {
        buma.className = 'fa fa-sun-o';
        buma.style.color = "white";

        navigator.style.color = "white";

        bd.style.backgroundColor = "black";

    } else {
        buma.className = 'fa fa-moon-o';
        buma.style.color = "black";

        navigator.style.color = "black";
        
        bd.style.backgroundColor = "white";
    }
}