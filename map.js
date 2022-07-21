const apikey = 'pk.eyJ1Ijoicml1Y2tzb24iLCJhIjoiY2w0bmppeGV3MDdrYTNjcnZrcWxtMzQ5aSJ9.rPpsgKnyRWz3IyIoxgImVA'

const map = L.map('map').setView([-5.84, -35.20], 16,5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 15,
    attribution: '© OpenStreetMap'
}).addTo(map);

//marcador 1

var foodIcon = L.icon({
    iconUrl: 'images/food.png',
    
    iconSize:     [43, 43], // size of the icon
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});



const marcador1 = L.marker([-5.839727, -35.195710], {icon: foodIcon}).addTo(map);
const marcador2 = L.marker([-5.839991, -35.198613], {icon: foodIcon}).addTo(map);

//Acao marcador 1
//let template = ''
//marcador1.bindPopup(template);

marcador1.on('click', function(e){
    funcao(1);
});

//Acao marcador 2
//let template2 = ''
//marcador2.bindPopup(template2);

marcador2.on('click', function(e){
    funcao(2);
});


function funcao(id){
    const title = document.querySelector(".title");
    const desc = document.querySelector(".desc");
    const desc2 = document.querySelector(".desc2");
    switch(id){
        case 1:
            title.innerHTML="Acaí do Renatão";
            desc2.innerHTML = "<h2>O melhor açaí da região!</h2><h3>Localizado na parada do Setor 2</h3>"
            desc.innerHTML = "<div id='conteudo'><nav class='navbar navbar-expand-lg navbar-light bg-transparent'><div class='collapse navbar-collapse' id='navbarNav'><ul class='navbar-nav'><li class='nav-item'><a class='nav-link' href='cardapio1.html' target='blank' style='font-size: 240%;'>Cardápio</a></li></ul></div></nav></div>";
            break;
        case 2:
            title.innerHTML="Exemplo 2";
            desc2.innerHTML= "";
            desc.innerHTML = "<div id='conteudo'><nav class='navbar navbar-expand-lg navbar-light bg-transparent'><div class='collapse navbar-collapse' id='navbarNav'><ul class='navbar-nav'><li class='nav-item'><a class='nav-link' href='#' style='font-size: 240%;'>Cardápio</a></li></ul></div></nav></div>";

            break;
        
    }
}
