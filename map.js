const apikey = 'pk.eyJ1Ijoicml1Y2tzb24iLCJhIjoiY2w0bmppeGV3MDdrYTNjcnZrcWxtMzQ5aSJ9.rPpsgKnyRWz3IyIoxgImVA'

const map = L.map('map').setView([-5.84, -35.20], 16,5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//marcador 1

const marcador1 = L.marker([-5.839727, -35.195710]).addTo(map);
const marcador2 = L.marker([-5.839991, -35.198613]).addTo(map);

let template = '<button id="btn1" onclick="funcao(1);">Exemplo 1</button>'
marcador1.bindPopup(template);

let template2 = '<button id="btn2" onclick="funcao(2);">Exemplo 2</button>'
marcador2.bindPopup(template2);


function funcao(id){
    const title = document.querySelector(".title");
    const desc = document.querySelector(".desc");
    switch(id){
        case 1:
            title.innerHTML="qualquer coisa";
            desc.innerHTML = "mais uma coisa";
            break;
        case 2:
            title.innerHTML="qualquer coisa2";
            desc.innerHTML = "mais uma coisa2";
            break;
    }
}
